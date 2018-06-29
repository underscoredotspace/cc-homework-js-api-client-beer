const debug = true

const pubSub = {
  publish: function (channel, payload) {
    if (debug) {console.log('<publish>', {channel, payload})}
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function (channel, callback) {
    if (debug) {console.log('<subscribe>', {channel})}
    document.addEventListener(channel, callback);
  }
};

module.exports = pubSub;