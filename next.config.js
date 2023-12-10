const million = require("million/compiler");
const { withContentlayer } = require("next-contentlayer");

const millionConfig = {
  auto: { rsc: true },
};

/**
 * @type {import('next').NextConfig}
 */
const defaultNextConfig = {};
module.exports = million.next(
  withContentlayer(defaultNextConfig),
  millionConfig
);
