export const bridgeAbi = [
    {
      "inputs": [],
      "name": "B_DENIED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_DENIED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_ERC20_CANNOT_RECEIVE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_EV_DO_NOT_BURN",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_EV_NOT_AUTHORIZED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_EV_PARAM",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_FAILED_TRANSFER",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_FORBIDDEN",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_FORBIDDEN",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_GAS_LIMIT",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_GAS_LIMIT",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_INCORRECT_VALUE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_INCORRECT_VALUE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_INIT_PARAM_ERROR",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_HASH_NULL",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_HASH_NULL",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_NON_RETRIABLE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_NON_RETRIABLE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_NOT_FAILED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_NOT_FAILED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_RECALLED_ALREADY",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_RECALLED_ALREADY",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_NULL_APP_ADDR",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_SIGNAL_NOT_RECEIVED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_SIGNAL_NOT_RECEIVED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_STATUS_MISMATCH",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_STATUS_MISMATCH",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_USER_IS_NULL",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_USER_IS_NULL",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_WRONG_CHAIN_ID",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_WRONG_CHAIN_ID",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_WRONG_CHAIN_ID",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_WRONG_CHAIN_ID",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_WRONG_TO_ADDRESS",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_WRONG_TO_ADDRESS",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_ZERO_SIGNAL",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RESOLVER_DENIED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RESOLVER_INVALID_ADDR",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        }
      ],
      "name": "RESOLVER_ZERO_ADDR",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "addressManager",
          "type": "address"
        }
      ],
      "name": "AddressManagerChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "DestChainEnabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "MessageRecalled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "MessageRecalled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "indexed": false,
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        }
      ],
      "name": "MessageSent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "indexed": false,
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        }
      ],
      "name": "MessageSent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "enum LibBridgeStatus.MessageStatus",
          "name": "status",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "transactor",
          "type": "address"
        }
      ],
      "name": "MessageStatusChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "enum LibBridgeStatus.MessageStatus",
          "name": "status",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "transactor",
          "type": "address"
        }
      ],
      "name": "MessageStatusChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "SignalSent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "addressManager",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "context",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "msgHash",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            }
          ],
          "internalType": "struct IBridge.Context",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "getMessageStatus",
      "outputs": [
        {
          "internalType": "enum LibBridgeStatus.MessageStatus",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "getMessageStatusSlot",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        }
      ],
      "name": "hashMessage",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addressManager",
          "type": "address"
        }
      ],
      "name": "init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_chainId",
          "type": "uint256"
        }
      ],
      "name": "isDestChainEnabled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "destChainId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "isMessageFailed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "isMessageRecalled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "srcChainId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "isMessageReceived",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "isMessageSent",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "processMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "recallMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "allowZeroAddress",
          "type": "bool"
        }
      ],
      "name": "resolve",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "addr",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "allowZeroAddress",
          "type": "bool"
        }
      ],
      "name": "resolve",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "addr",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        },
        {
          "internalType": "bool",
          "name": "isLastAttempt",
          "type": "bool"
        }
      ],
      "name": "retryMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        }
      ],
      "name": "sendMessage",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newAddressManager",
          "type": "address"
        }
      ],
      "name": "setAddressManager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
];
export const fabric = [
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "numberOfContracts",
              "type": "uint256"
          }
      ],
      "name": "createContracts",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address payable",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "userToContracts",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "contractAddress",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "withdrawFromContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }
];
export const taikoSwap = [
  {
      "type":"function",
      "name":"factory",
      "inputs": [],
      "outputs": [{"name":"","type":"address"}]
  },
  {
      "type":"function",
      "name":"getPair",
      "inputs": [
        {"name":"tokenA","type":"address"},
        {"name":"tokenB","type":"address"}
      ],
      "outputs": [{"name":"pair","type":"address"}]
  },
  {
      "type":"function",
      "name":"getAmountsOut",
      "inputs": [
          {"name":"amountIn","type":"uint256"},
          {"name":"path","type":"address[]"},
      ],
      "outputs": [
          {"name":"amounts","type":"uint256[]"},
      ]
  },
  {
      "type":"function",
      "name":"getAmountsIn",
      "inputs": [
          {"name":"amountOut","type":"uint256"},
          {"name":"path","type":"address[]"},
      ],
      "outputs": [
          {"name":"amounts","type":"uint256[]"},
      ]
  },
  {
      "type":"function",
      "name":"swapExactETHForTokens",
      "inputs": [
          {"name":"amountOutMin","type":"uint256"},
          {"name":"path","type":"address[]"},
          {"name":"to","type":"address"},
          {"name":"deadline","type":"uint256"}
      ]
  },
  {
      "type":"function",
      "name":"swapExactTokensForETH",
      "inputs": [
          {"name":"amountIn","type":"uint256"},
          {"name":"amountOutMin","type":"uint256"},
          {"name":"path","type":"address[]"},
          {"name":"to","type":"address"},
          {"name":"deadline","type":"uint256"}
      ]
  },
  {
      "type":"function",
      "name":"getReserves",
      "inputs": [],
      "outputs": [
        {"name":"_reserve0","type":"uint112"},
        {"name":"_reserve1","type":"uint112"},
        {"name":"_blockTimestampLast","type":"uint32"},
      ]
  },
  {
      "type":"function",
      "name":"totalSupply",
      "inputs": [],
      "outputs": [{"name":"","type":"uint256"}]
  },
  {
      "type":"function",
      "name":"addLiquidityETH",
      "inputs": [
          {"name":"token","type":"address"},
          {"name":"amountTokenDesired","type":"uint256"},
          {"name":"amountTokenMin","type":"uint256"},
          {"name":"amountETHMin","type":"uint256"},
          {"name":"to","type":"address"},
          {"name":"deadline","type":"uint256"}
      ]
  },
  {
      "type":"function",
      "name":"deposit",
      "inputs": [
          {"name":"_pid","type":"uint256"},
          {"name":"_amount","type":"uint256"},
      ]
  },
  {
      "type":"function",
      "name":"userInfo",
      "inputs": [
          {"name":"","type":"uint256"},
          {"name":"","type":"address"}
      ],
      "outputs": [
        {"name":"amount","type":"uint256"}
      ]
  },
  {
      "type":"function",
      "name":"withdraw",
      "inputs": [
          {"name":"_pid","type":"uint256"},
          {"name":"_amount","type":"uint256"},
      ]
  },
  {
      "type":"function",
      "name":"removeLiquidityETH",
      "inputs": [
          {"name":"token","type":"address"},
          {"name":"liquidity","type":"uint256"},
          {"name":"amountTokenMin","type":"uint256"},
          {"name":"amountETHMin","type":"uint256"},
          {"name":"to","type":"address"},
          {"name":"deadline","type":"uint256"}
      ]
  },
  {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [
      {
        "type": "uint256",
        "name": "amountOut",
        "internalType": "uint256"
      }
    ],
    "name": "swapExactTokensForTokens",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountIn",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "amountOutMin",
        "internalType": "uint256"
      },
      {
        "type": "address[]",
        "name": "path",
        "internalType": "address[]"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "deadline",
        "internalType": "uint256"
      }
    ]
  }
];

export const mint = [{
  "type": "function",
  "name": "mint",
  "inputs": [
    {
      "name": "params",
      "type": "tuple",
      "components": [
        {"name": "tokenAddress", "type": "address"},
        {"name": "tokenId", "type": "uint24"},
        {"name": "data", "type": "bytes32[]"},
        {"name": "amount", "type": "uint8"}
      ]
    }
  ]
}];

export const erc20 = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_initialSupply",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "decimals_",
        "type": "uint8"
      }
    ],
    "name": "setupDecimals",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const minpadAbi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "param1",
        "type": "address"
      },
      {
        "name": "param2",
        "type": "uint256"
      },
      {
        "name": "param3",
        "type": "uint256"
      },
      {
        "name": "param4",
        "type": "address"
      },
      {
        "name": "param5",
        "type": "uint256"
      },
      {
        "name": "param6",
        "type": "tuple",
        "components": [
          {
            "name": "param7",
            "type": "bytes32[]"
          },
          {
            "name": "param8",
            "type": "uint256"
          },
          {
            "name": "param9",
            "type": "uint256"
          },
          {
            "name": "param10",
            "type": "address"
          }
        ]
      },
      {
        "name": "param11",
        "type": "bytes"
      }
    ],
    "name": "claim",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
