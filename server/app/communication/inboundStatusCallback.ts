const InboundCallStatusCallback = (args: { body: any }) => {
    const { body } = args;

    const { CallStatus } = body;

    if (CallStatus === "initiated") {
        console.log("The call has been initiated");
    }

    if (CallStatus === "in-progress") {
        console.log("The call is in progess");
    }

    if (CallStatus === "completed") {
        console.log("Completed");
    }
};

export default InboundCallStatusCallback;
