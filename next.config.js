const {
  // ESBuildPlugin,
  ESBuildMinifyPlugin
} = require("esbuild-loader");
const ip = require("ip");
const Dotenv = require("dotenv-webpack");

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    if (process.env.NODE_ENV !== 'production') {
        return [
            {
                destination: "http://localhost:3000/api/graphql/:path*",
                source: "/api/graphql/:path*'",
            },
            {
              destination: "http://localhost:3000/uploads/:path*",
              source: "/uploads/:path*",
          },
        ];
    } else return []
},
  /* async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin"
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp"
          }
        ]
      }
    ];
  }, */
  env: {
    HOST_IP: ip.address(),
  },
  webpack: (config, { webpack, dev }) => {
    if (!dev) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          /**
           * Not sure why, This increases bundle size
           * when you would think the oposite would be true!
           */
          // __jsx: ['react', 'createElement'],
          // __fragment: ['react', 'Fragment'],
          React: "react"
        })
      );
      config.plugins.push(new Dotenv({ silent: true }));

      /**
       * NextJS 최신 버전의 경우 esbuildplugin이 기본으로 포함되어있는 것으로 추측됨. 하단은 에러 전문
       * ESBuildPlugin is no longer required for usage and will be removed in the next major release. Please refer to the docs and release notes for more info.
       */
      // config.plugins.push(new ESBuildPlugin());

      const convertToESBuild = (obj) => {
        if (obj.loader === "next-babel-loader") {
          return {
            loader: "esbuild-loader",
            options: {
              loader: "tsx",
              target: "es2017",
              tsconfigRaw: require("./tsconfig.json")
              // jsxFactory: '__jsx',
              // jsxFragment: '__fragment',
            }
          };
        }
        return obj;
      };

      // const rule = config.module.rules[0];
      const rules = config.module.rules.reduce((acc, item) => 
        item.use && item.use.loader ? acc.concat(item) : acc
      , []);

      rules.forEach(rule => {
        if (Array.isArray(rule.use)) {
          rule.use = rule.use.map((e) => {
            if (typeof e === "object") {
              return convertToESBuild(e);
            }
            return e;
          });
        } else {
          rule.use = convertToESBuild(rule.use);
        }
      });

      /**
       * 빌드 속도를 더 줄이고 싶다면 Minify를 빼고 빌드. (배포시에는 포함되어야 함)
       * Not sure why, but ESBuildMinifyPlugin makes the bundle larger.
       *
       * With Default Minimization:
       * Main Bundle: 239 KB
       * Largest Page: 122 KB
       *
       * With ESBuild Minification:
       * Main Bundle: 664 KB
       * Largest Page: 132 KB
       *
       * Probably a configuration error.
       */

      // Remove Default TerserPlugin
      config.optimization.minimizer.shift();

      // Add ESBuild Minify
      config.optimization.minimizer.unshift(
        new ESBuildMinifyPlugin({
          target: "es2017",
          minify: true
        })
      );
    }
    return config;
  }
};