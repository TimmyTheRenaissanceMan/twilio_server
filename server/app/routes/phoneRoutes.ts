const express = require("express");
const router = express.Router();

const { Controllers } = require("../controllers/controllers");

router.post("/token", Controllers.capabilityToken);
router.post("/inbound-call", Controllers.inboundCall);
router.post(
    "/callInboundStatusCallBack",
    Controllers.callInboundStatusCallBack
);
router.post("/outbound-call", Controllers.outboundCall);
router.post(
    "/outboundCallStatusCallBack",
    Controllers.outboundCallStatusCallback
);
router.post("/inbound-call", Controllers.inboundCall);
router.post(
    "/callInboundStatusCallBack",
    Controllers.callInboundStatusCallBack
);
router.get(
    "/test",
    Controllers.test
);

module.exports = router;
