const {
    default: ClientCapability,
} = require("twilio/lib/jwt/ClientCapability");

const TwilioToken = () => {
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioAppSid = process.env.TWILIO_APP_SID;
    const deviceName = "demo_device";
    let token;
    try {
        const capability = new ClientCapability({
            accountSid: twilioAccountSid,
            authToken: twilioAuthToken,
        });
        capability.addScope(
            new ClientCapability.IncomingClientScope(deviceName)
        );
        capability.addScope(
            new ClientCapability.OutgoingClientScope({
                applicationSid: twilioAppSid,
                clientName: deviceName,
            })
        );
        console.log(capability);
        token = capability.toJwt();
    } catch (e) {
        console.log("Capability Token Error", e);
    }

    return { token };
};

module.exports = TwilioToken;
