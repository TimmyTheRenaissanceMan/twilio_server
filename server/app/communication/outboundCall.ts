const twilio = require("twilio");

const VoiceResponse = twilio.twiml.VoiceResponse;

const OutboundCall = (args: { To: string; From: string }) => {
    console.log("here")
    const { To, From } = args;

    let voiceResponse = new VoiceResponse();
    const dial = voiceResponse.dial({
        callerId: From,
        timeout: 10,
    });
    dial.number(
        {
            //statusCallbackEvent: "initiated ringing answered completed",
            statusCallback: `${process.env.TWILIO_CALLBACK_URL}/communication/outboundCallStatusCallBack`,
            statusCallbackMethod: "POST",
        },
        To
    );

    const voiceResponseString = voiceResponse.toString();
    return { voiceResponseString };
};

module.exports = OutboundCall;
