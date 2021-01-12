const axios = require("axios");

const getFormattedDate = selectedDate => {
  return `${selectedDate.getFullYear()}-${
    selectedDate.getMonth() + 1
  }-${selectedDate.getDate()}`;
};

module.exports = {
  getRates: async (req, res, next) => {
    const { base, currency } = req.query;

    if (typeof base !== "string" || !base.trim())
      return res
        .status(400)
        .json({
          success: false,
          error: "Invalid request param",
          param: "base",
        });

    if (typeof currency !== "string" || !currency.trim())
      return res
        .status(400)
        .json({
          success: false,
          error: "Invalid request param",
          param: "currency",
        });

    const URL = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`;

    try {
      const _res = await axios.get(URL);

      const { base, rates, date } = _res.data;
      res.json({
        results: {
          base,
          date,
          rates,
        },
      });
    } catch (e) {
      if (e.response) {
        if (e.response.data)
          return res.status(400).json({ success: false, ...e.response.data });
      }

      res.status(400).json({ success: false, error: "Bad request" });
    }
  },
};
