export {};
import { Request, Response } from "express";
const InboundCall = require("../communication/inboundCall");
const InboundCallStatusCallback = require("../communication/inboundStatusCallback");
const TwilioToken = require("../communication/accessToken");
const OutboundCall = require("../communication/outboundCall");
const OutboundCallStatusCallback = require("../communication/outboundStatusCallback");

class Controllers {
    static capabilityToken(req: Request, res: Response) {
        console.log("token has been requested");
        const token = TwilioToken(req.body);
        res.send(token);
    }
    static inboundCall(req: Request, res: Response) {
        console.log("inbound call has been initiated");
        const { body } = req;
        console.log(InboundCall);
        const result = InboundCall.default({ ...body });
        const { voiceResponseString } = result;
        res.type("text/xml");
        res.send(voiceResponseString.toString());
    }
    static callInboundStatusCallBack(req: Request, res: Response) {
        InboundCallStatusCallback(req);
        res.status(202).send();
    }
    static outboundCall(req: Request, res: Response) {
        console.log("Outbound call has been initiated");
        const { body } = req;
        const result = OutboundCall({ ...body });
        const { voiceResponseString } = result;
        res.type("text/xml");
        res.send(voiceResponseString.toString());
    }

    static outboundCallStatusCallback(req: Request, res: Response) {
        OutboundCallStatusCallback(req);
        res.status(202).send();
    }
    static test(req: Request, res: Response) {
        res.status(202).send();
    }
}

module.exports = { Controllers };
