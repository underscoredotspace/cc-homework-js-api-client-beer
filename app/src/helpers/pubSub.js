const debug = false //== false

const pubSub = {
  publish: function (channel, payload) {
    if (debug) {console.log({channel, payload})}
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function (channel, callback) {
    if (debug) {console.log({channel})}
    document.addEventListener(channel, callback);
  }
};

module.exports = pubSub;