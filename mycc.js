const shim=require('fabric-shim');

const chaincode = class{
    async Init(stub){
        let ret =stub.getFunctionAndParameters();

        let args=ret.params;
        let a=args[0];
        let aValue=args[1];
        let b=args[2];
        let bValue=args[3];
        
        await stub.putState(a, Buffer.from(aValue));
        await stub.putState(b, Buffer.from(bValue)); 
        
        return shim.success(Buffer.from('Initialized successfully!!!'));
    }
    async Invoke(stub){

    }
};

shim.start(new chaincode());