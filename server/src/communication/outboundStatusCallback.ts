const OutboundCallStatusCallback = (args: any) => {
    const { body, params } = args;

    const { CallStatus } = body;

    if (CallStatus === "ringing") {
        console.log("The phone is ringing", body, params);
    }

    if (CallStatus === "in-progress") {
        console.log("The call is in progress", body);
    }

    if (CallStatus === "completed" || CallStatus === "no-answer") {
        console.log("The call was completed", body);
    }
};

module.exports = OutboundCallStatusCallback;
