import twilio from "twilio";

const VoiceResponse = twilio.twiml.VoiceResponse;

const InboundCall = (args: { To: string; From: string }) => {
    const { To, From } = args;

    console.log(To, From);
    const voiceResponse = new VoiceResponse();
    const dial = voiceResponse.dial({
        timeout: 20,
    });
    dial.client(
        {
            //statusCallbackEvent: "initiated ringing answered completed",
            statusCallback: `${process.env.TWILIO_CALLBACK_URL}/communication/callInboundStatusCallBack`,
            statusCallbackMethod: "POST",
        },
        "demo_device"
    );
    console.log("Inbound Voice Response TwiML", voiceResponse.toString());

    const voiceResponseString = voiceResponse.toString();
    return { voiceResponseString };
};

export default InboundCall;
