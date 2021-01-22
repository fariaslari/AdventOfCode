let rawEntries = "FBBFBBBRLL\r\nFBBFFBFLLL\r\nBFFFFFFLRL\r\nFBFBFFFLRR\r\nBBBFBFBRLL\r\nBFBBFFBRLL\r\nBBFFFFBRLL\r\nBFBFBBBLRR\r\nFFBBFBFLLR\r\nFBBBBFBRRR\r\nFFBFBBFRLR\r\nFBBFFFFRRR\r\nBFBFFBFRRL\r\nFFFBBFFLLL\r\nFFFFBBFLLL\r\nFFBFFBBRLL\r\nFBBBBBFLRR\r\nFFFBFFFLRR\r\nFBBBBBFRLR\r\nBFFBFFBLRL\r\nFBBFBFBRRL\r\nFBFBFBFRRR\r\nFBBBFBFLRR\r\nFFBBFBFRRL\r\nFFBFFBFLRL\r\nBFBFBFBLRR\r\nBBFBBBFRRL\r\nBFBFBBFRLL\r\nFBBFBFBLLR\r\nBFFFBFFLRR\r\nFBBBFFFRLR\r\nFBBFFFFLLL\r\nBFFFBBBLRL\r\nBFBBBFBRLR\r\nBFBBFFFLRL\r\nFFFBFFFRRR\r\nBBFFBFFRLL\r\nFFBFBBFRRR\r\nBBBFFBBLLL\r\nFFBBBFFRRR\r\nBFFBFBBRLR\r\nBBFBBFFRLR\r\nFFBFBBFLRL\r\nBFBBFBBLLL\r\nFBBFBFBLLL\r\nFBBFBBFLRL\r\nBFBFBBBRLR\r\nFFBFFFFLRL\r\nFBBFFFFRLR\r\nBFBBBFBRLL\r\nFFFBBBBLLR\r\nBFFFBFFLLL\r\nBFFBFFFRRR\r\nFBFFFFBRLL\r\nBFBFFFBRLR\r\nFFBBFFFLRL\r\nFFBFBFBLLL\r\nFBFBBFBRLR\r\nBBBFFFFLLR\r\nBBFFBBBRLR\r\nFFBFBFBLRR\r\nBFBBFBFLLL\r\nFFBFFBBLLR\r\nFBBFFBBLLL\r\nBFBFBFFRRR\r\nBBFBBBFRLL\r\nBFBFFBFLRR\r\nBBBFFFFRLR\r\nBFFBFBFLRR\r\nFFFBFFFRLR\r\nFFBBFFBLRL\r\nFFBFFBBLRL\r\nFFBBBBFLLL\r\nFBBBFBBLRR\r\nFFBFBFFRRR\r\nBFFBFBFRRL\r\nFFBBBFFLLL\r\nBFFBBFFLLL\r\nBFBFFFBLRR\r\nFFBBBBFRRR\r\nBBFFBBFRLR\r\nFFFBBFFLRL\r\nBFFBBFFRRL\r\nFFFBBBFLLL\r\nFBBFFBBLRR\r\nBFFFBFFLLR\r\nBBFBFBFLRL\r\nBBFFFFFLRL\r\nFBBBFFBLLR\r\nFBFFFFFLLL\r\nBBFFBBFLRL\r\nFBBBBBFLLR\r\nBBBFBFFLLL\r\nFBBBBBFRRL\r\nBFBBFFBRLR\r\nFFBBBBBLLR\r\nFFBFBFFLRL\r\nBBFBBBBLRR\r\nBBFFBBBRRR\r\nFBFBFBFRLL\r\nFBBBFFFRLL\r\nBFFBBBBLLR\r\nBFFFFFBLLR\r\nFFBBBBFRLL\r\nBFFFFBBLRR\r\nFBBFBBBRLR\r\nBBBFFFBLRL\r\nBFFBBFBRRR\r\nBBFBBFBRRR\r\nBFFBBBBRRR\r\nBBFFBBFLLR\r\nFBFFBBBLLR\r\nBFBBBBFRLL\r\nBBFBFBFLLL\r\nBFBBFFBRRR\r\nFBFBFBFRLR\r\nFFFBFFBLRL\r\nFBFBBFFRLR\r\nBFBFFBBRLL\r\nBBFBFFFRLL\r\nFFFBBBFRLR\r\nFFBBBFBRRR\r\nBBFBFBBRLR\r\nFBFBFBFLRR\r\nBBFFFBBRLL\r\nBBFFBFBLLL\r\nFFFFBFBRRR\r\nBBFFBBBLRL\r\nBBBFFFFLLL\r\nFFBBBFBRLR\r\nFBFFFBFRLR\r\nBFBFBBBLLR\r\nFFFBBFBRLL\r\nBFFFFBBLLR\r\nBFBBBFBLLL\r\nBBFFBFFLRR\r\nFBFFFBFRLL\r\nBBFFFBFLRR\r\nFFBBFFBLRR\r\nFBFFBFFLRL\r\nFFFBBFFRRL\r\nBFFBFFFLRL\r\nFFFFBFBLRL\r\nFBFBBBBRLR\r\nFFBBFBBRLL\r\nFFFBBBFLRL\r\nFFBFBBFLRR\r\nBFBBBBFLRL\r\nFBFBBFBLRL\r\nFBBFFBBRRL\r\nFBFFBBFRRL\r\nBFFBBFFRRR\r\nFBFBFFFRRR\r\nFFBBFBFLLL\r\nFBBFFFBLRL\r\nBFBBBBFLRR\r\nFBFBBFFLRL\r\nBBFBBFBLLL\r\nBBBFFBFRLR\r\nFBBBFFFLRR\r\nBBFFFBFRLR\r\nBBBFFBFLLL\r\nFBBFFFBRRR\r\nFFFBBBFLRR\r\nFFBFBBBRLL\r\nFBFBBFFRRL\r\nBFBBFBFRLL\r\nFBFFBBBLLL\r\nFFFFBBBLLL\r\nFFBBBBBRRL\r\nBBBFBFFLRL\r\nFBBBBFBLRL\r\nBBFFBBBLLL\r\nBFFBFFFLLR\r\nFBBBBBBLLL\r\nFFFBFBBRLL\r\nFFBFBBFLLL\r\nFFBFBBBRLR\r\nBFBBBFBLRR\r\nFBBBBBBLRL\r\nBFBBFBBRRL\r\nBBFBBBFLLR\r\nFBFFBFBRLR\r\nFFBFBBBLRL\r\nFFBBFFFRRR\r\nFBBBBFFLLL\r\nFFBFFBFRLL\r\nFFBFFBBLRR\r\nBFBFFBFRLL\r\nFFFFBFBRLL\r\nFBFFBFBLLR\r\nFFFBFBBLLL\r\nFBBBBBFRRR\r\nFFFBBBBRLL\r\nFBFFBFBLRL\r\nBBFBFBFRRL\r\nFFFBFFBLRR\r\nBFFBFFBRRR\r\nFBFFFFFLRL\r\nFBBFBFFLRR\r\nFBFFBFBLRR\r\nFBFFFBBLLL\r\nFFBBFBBLLL\r\nBFFFFBFLLL\r\nFBBBFBFLRL\r\nBBFBFFBLLR\r\nBBBFFBBRRL\r\nFBFBFFFRLR\r\nFBFFBFBRRR\r\nFBBBFFFRRL\r\nBFBFFBBRLR\r\nFBBFFFFRRL\r\nBBFFFFFRLR\r\nFFFBFBFRLR\r\nFBBFFFFLRL\r\nBBFFBBBLLR\r\nBFFFBFBLLL\r\nFFFBFFFLLR\r\nFBFBBFBRRL\r\nBFBBBFFLLR\r\nBFBFBBFLLR\r\nBFBFBFFLRL\r\nFBFFBBFLLR\r\nFFFBFFFRLL\r\nFBFBFBFLLL\r\nFBFFFBFLLR\r\nFFFBFBBRRR\r\nBFFFBBBRRR\r\nFBBFBFFLLL\r\nBBFFFBBRRL\r\nFBBBFBBLLR\r\nFBFBBFBRRR\r\nBFFFBBFLRR\r\nBBFBFFFRRR\r\nFBBBBBBLRR\r\nBFBFBBFRRR\r\nBBFBBBBRLR\r\nFFBBFFBLLR\r\nFFBFBFFRLL\r\nBBFFBFFRRL\r\nBBFFBFBLRR\r\nFBBBFFBLLL\r\nFBFBFFFLLL\r\nBBBFBFFRRR\r\nBBFFFFBLLR\r\nBBBFBFBLLR\r\nBFBFBFFLLL\r\nBFBFFFBLLL\r\nBBFBFFFRLR\r\nFBFBBBFRLR\r\nFBFBBBFLRR\r\nFBFBBBBLLR\r\nFBBBFBFLLL\r\nFFBBFFBRRR\r\nFBBFBBFLLL\r\nFBFBFFBRRL\r\nBFBFBBBRRR\r\nBFFBBBBLRL\r\nFFFBBBBLLL\r\nBFBBBFFLLL\r\nFBBFFBFRLR\r\nFFFBFFFLRL\r\nBBFFFBBLLR\r\nBBBFFBFRRR\r\nBBFBBBBRRL\r\nFFBFFFFRLR\r\nFFBBBFBLLL\r\nFFBFFFFLLL\r\nBFFFFBFLRR\r\nBFFFBFFRRL\r\nBFBBFBBLRL\r\nFBFBBBFLLR\r\nFFFBFBBLRR\r\nFFBFFBBRRL\r\nFFBBFBBLRR\r\nFFBFFFBRRL\r\nBBBFFFBLRR\r\nBBFBFBBRLL\r\nBFBBBBBLLL\r\nFFBBBBBRLL\r\nFBFBFBBLLR\r\nBFBFFFFLRR\r\nFBBBBBBRLL\r\nFBFFFBBRLL\r\nFBBBBFBLLL\r\nBFFBFFFLLL\r\nBBFBFBFRLR\r\nBFBBBFFLRR\r\nBBFBFFFLRR\r\nBFFBBBFLRL\r\nBFBFFBFLRL\r\nFFFBFBBRRL\r\nBBBFFBBLLR\r\nFBFBBBBLLL\r\nFBBFBBFLLR\r\nFBFFBFBRRL\r\nBFBBFFFLRR\r\nFBFBBBBRRL\r\nFBBBBFBLLR\r\nFBFFFFFLRR\r\nFFBBBFFRLR\r\nBFBBBBBRRL\r\nBBBFFFBLLR\r\nBFFBBBFLRR\r\nFFBBBBBLRR\r\nFBBFFBFRLL\r\nBFBFBFFRRL\r\nFFFBFBFRLL\r\nFFBFFFBRRR\r\nFFFFBBFRLR\r\nBBFFFBFLLL\r\nFFFFBFFRLL\r\nFBBBFBFRRL\r\nFBBBFFFRRR\r\nFFFFBBFRRR\r\nFFBFFFBLRL\r\nBBFBBBFRRR\r\nBFFBFFFRLR\r\nFFFBFBFRRR\r\nFFFFBBBRLL\r\nFBFBFFBLRR\r\nBBFFBFFLLL\r\nBBBFFBBLRL\r\nBBFFBFBLRL\r\nFFBBFBBRRR\r\nBFFBFBBRLL\r\nBFBBBBBRLL\r\nBBFFBBBLRR\r\nFFBBBFBLRR\r\nFBBFBBBLLR\r\nBFBBBBBRRR\r\nBBFBBFFLRR\r\nBBFFFBBLLL\r\nBFBBFFFRRR\r\nBFBBFFBLLL\r\nBFBFBBBLRL\r\nBFBFFBBLRR\r\nBBFFFBBLRL\r\nFBBFFBBRLL\r\nFBFFBFFRLR\r\nFBFFBFFLLR\r\nBFFFBBFLRL\r\nFFBFFBFRRR\r\nBFBFFBFRRR\r\nBFFFFBBRLR\r\nFBBFFBFRRL\r\nFFFBFBBLRL\r\nBFFFBBBRLL\r\nFBFFBFFRRL\r\nBBBFBBFLLL\r\nBBBFFBFLRL\r\nFBFFBBFLLL\r\nFFFFBBFLRR\r\nBFFFFBFRLR\r\nBFBBBFBRRR\r\nBBFBBFFLRL\r\nBFBBFBFRRL\r\nBFFBFBFRLL\r\nFBFFBFFLLL\r\nBFFFBBFRLR\r\nFFBBFBFLRR\r\nBFBBFBBRLL\r\nFFFBBBBLRL\r\nBFBBBFBRRL\r\nFBFFFFFRLR\r\nFFBFBFBLLR\r\nBFBBFBBLLR\r\nBBBFFBFLRR\r\nBFFBBBBRRL\r\nFBBBBFFRLR\r\nFBFFFBFRRL\r\nFFBFFFFRLL\r\nFFBBFBBLLR\r\nBBFBBBBLLR\r\nBFBFBFFRLR\r\nBBBFFFBRLR\r\nBFFBFBBLLL\r\nBFBFBBFRRL\r\nFFFBFFBRRR\r\nFFFBFBBLLR\r\nFFBBFFBRLR\r\nFFFBBBBRLR\r\nFBBFFBFLRR\r\nBFFBFFBLLL\r\nFBFBBBBRRR\r\nFBFFFBBLRL\r\nBBBFBFFRRL\r\nFBFFBBBLRR\r\nBFBBFFFRLL\r\nBFBFFFFRRL\r\nFBFBFFFRLL\r\nBFFFBFBLLR\r\nFBBFBBBLRL\r\nFBBFFFBLLL\r\nFBFBBBFRRR\r\nFFBFFBFLRR\r\nBBFBFBBRRL\r\nBBFBBBFLRL\r\nBBFFFFFRLL\r\nFFBFFBBRLR\r\nBBFBBBBLLL\r\nBBFBFFFLRL\r\nFBFBBFBRLL\r\nFBFFBBBRRR\r\nFBFBFBFRRL\r\nBFFFFFBRRR\r\nFFBFBBBLLL\r\nFFBBFBFLRL\r\nBFFBBBFRLL\r\nFBBBFFBRRR\r\nBFFBFBFLRL\r\nBBFFFBBLRR\r\nBBFFBFBRRL\r\nFBFBFBFLLR\r\nFFBFBFBRRL\r\nBFFFFBBRLL\r\nBBFFFFBRRL\r\nFFBBFFBRLL\r\nBFFBBFBRLL\r\nFBBBFFBRLL\r\nBFBFFFBLLR\r\nFFFBFBFRRL\r\nBBFFBFBRRR\r\nBFFFFFFLLR\r\nFBBFBFFRRL\r\nBFFBBBBLLL\r\nFFBBFFFLLL\r\nFBBFFBBLLR\r\nFFFFBBFRLL\r\nFBFBFFFRRL\r\nBFFFBBFRRR\r\nBBFBFFBRRL\r\nBFFBFBBRRR\r\nBFBFFBFRLR\r\nBBFBFFBLRR\r\nBFBBFBBRRR\r\nBFBFFFFRLL\r\nBBFFBBBRLL\r\nFFBFFFFLRR\r\nBBBFBFFLLR\r\nFFFBBFBRLR\r\nBFBBFFFLLL\r\nFBBBFBBRLR\r\nFFBFFBFRLR\r\nFBFBBFBLLL\r\nFBBBFBFRRR\r\nFBFFFBBRRR\r\nBFFBFBFRRR\r\nFFBBBBFRRL\r\nBBFBFBBLLL\r\nBBFFBFBLLR\r\nBBBFFFFRRL\r\nFFBFFFFRRR\r\nBBFFBBFRRR\r\nFFBBBFBLRL\r\nFBBFBFBLRL\r\nFBBBFBFRLR\r\nBFFBFBFRLR\r\nBFFFBFBRRR\r\nFFBBFFFRLL\r\nFBFFBFBRLL\r\nFFBBBFFLRR\r\nFBBBFBBRRL\r\nBBFBBBBLRL\r\nBFFFBBBLLR\r\nBFBBBBBLRL\r\nBFFFFBFLRL\r\nBFFFFFFRLL\r\nFFFFBBBRRL\r\nFFBFBBFRRL\r\nBBBFFBFRRL\r\nFBBFBFFLRL\r\nBBBFBFBLRL\r\nFBBFBBFRRL\r\nFBFBFFBLLL\r\nFBBBBBBLLR\r\nBBBFFFBRRL\r\nFFBFBBFLLR\r\nBFBFFBBRRL\r\nFFBFFFBLRR\r\nBBFBFBFRRR\r\nFBBBBFBLRR\r\nFFBBFBFRRR\r\nBFBBFBFLRL\r\nBBFFBFFLLR\r\nFFFFBBBLLR\r\nFFFBBFBLLL\r\nFFBBFFFRRL\r\nBFFBBBFRRL\r\nBFBBBBBLLR\r\nBBBFFFFRRR\r\nFBFFBBBRLR\r\nFBFFBFFRRR\r\nFFFBFBFLRL\r\nFBFFBFFRLL\r\nFBBBFFFLLL\r\nBFFFFFBLRR\r\nBFBBFBFRLR\r\nFBFBBBBRLL\r\nFBFBBBFLRL\r\nFFFBBFBLRR\r\nBBFBBBFRLR\r\nFBFFFFBLLR\r\nBBBFFBFRLL\r\nFBBFBFFRLR\r\nBFFFBBFRRL\r\nBFFFFBBRRR\r\nFBFFBFBLLL\r\nBFBFFFBRRR\r\nBFBFBBFLRR\r\nFBFFBBBLRL\r\nFFBFBBFRLL\r\nFBBBFBFRLL\r\nFFBFFBBRRR\r\nFBBFFBBRLR\r\nBFFBFBBLRL\r\nFFBFBFFRRL\r\nFBBFFFFLRR\r\nBBFBBFFRRR\r\nBFBBFFFRRL\r\nFBBFFFBRLL\r\nFFBBBBFRLR\r\nBBFFBBFRRL\r\nBFBBFBFRRR\r\nBFFBBFFLLR\r\nBBFFBBFLRR\r\nBBFBBFFLLR\r\nBFFFBBFLLL\r\nFBBBFFBRRL\r\nBBFFFFFLRR\r\nBFFFBBBRLR\r\nBFBFBBFLRL\r\nBBFBBFBLRR\r\nFFBFFFFRRL\r\nBFFBBBFLLL\r\nFBFBFBBRLR\r\nFFBBFFFLLR\r\nFFFBFFFRRL\r\nBBFBBFBRRL\r\nBBFFFFFLLR\r\nFFFFBFBRLR\r\nBFFFFBFRLL\r\nBBBFBFFRLR\r\nBFFFFBBLRL\r\nBFFBBFFLRR\r\nFBFFFBBLRR\r\nBFFFBBBLLL\r\nBFFBBBFLLR\r\nBFFBBFBRRL\r\nFBBFBFBRRR\r\nFBFBFFFLLR\r\nFFFBBFFRLR\r\nFFBFBFFLLR\r\nFBBFFBFRRR\r\nFBFFBBFRLR\r\nFBBFFFBRLR\r\nBFBFFFBRRL\r\nBFFFFBFLLR\r\nBBBFFFFLRR\r\nBFBFBFFRLL\r\nFBFBFBBRRL\r\nFFBFBFFLLL\r\nBBFFFFBRRR\r\nFBFBBFFRLL\r\nBBFFFFFLLL\r\nFFFFBBBLRL\r\nBFFFFBBLLL\r\nFFFBFBFLLL\r\nFFFFBFBLLR\r\nFFFBBFBLLR\r\nFFFBBFBLRL\r\nFFFFBFFRRR\r\nBBFFFFBLRL\r\nBFBBBBFLLR\r\nBBFBFBBLLR\r\nBFFFFFFRLR\r\nFBBFFFFRLL\r\nFFFBFFBLLL\r\nBBBFFBBRRR\r\nBBFBFBBLRR\r\nFBBBBFFLRL\r\nFFBBBFFLLR\r\nFBBBBFFRLL\r\nBBFBFBFLRR\r\nBFFBFBBLLR\r\nBBBFFFFRLL\r\nFBFBFFBRRR\r\nFBFBFFBLLR\r\nFFFBBFBRRL\r\nFBBBBBBRLR\r\nFBFFFFBRRL\r\nFFBBFBBRRL\r\nBBBFFFBRLL\r\nFFFBFFBLLR\r\nBFBFBBFLLL\r\nBFFBFBFLLR\r\nBBFFBBFRLL\r\nBFFFBBFLLR\r\nBFBBFBFLRR\r\nFBBFFBFLLR\r\nBBFBBFFRLL\r\nFFBBBBBRRR\r\nFFFBBFFLLR\r\nBBBFFBFLLR\r\nBBFBFFBLLL\r\nFFBBFBBRLR\r\nFBBBBBFRLL\r\nBBFBFFBRLR\r\nBBFFBFBRLL\r\nBFFBFFBLLR\r\nFBFFBFFLRR\r\nFBFFFBFLRL\r\nBFBBFFFLLR\r\nFBBFBFFRRR\r\nFBFBFBBLRR\r\nBFBBBBFRRR\r\nBFBFFFFLRL\r\nFFFBFFFLLL\r\nFFFBBBFRLL\r\nFFFBBBFRRR\r\nFBBBBBFLRL\r\nBBFFFFBLRR\r\nBFFBBBFRLR\r\nBFFBFFBRLR\r\nFBBBBFBRLR\r\nFFBFBBBLRR\r\nBBFBFFFRRL\r\nBFFBFBBLRR\r\nBFFBBFFLRL\r\nBFBFFFFRRR\r\nFBBBFBBLRL\r\nBFBBBFFRRL\r\nFBFBBBFLLL\r\nBFFBBBBRLL\r\nFBBFFFBLLR\r\nBBBFBFFLRR\r\nFBFFBBFLRR\r\nBFBBFFBLLR\r\nBFFBBFFRLR\r\nBBFFBBBRRL\r\nBFFBBFBLLR\r\nFBBBBBFLLL\r\nBBFFFBFLLR\r\nBFBBBFFLRL\r\nFFBBFBBLRL\r\nBBFBFBFLLR\r\nBBFFFBFRLL\r\nBFFFFFBRRL\r\nBBBFBFBRLR\r\nFFFBBBBRRR\r\nFBFBBFFRRR\r\nBFFBFFFRRL\r\nBFFFBFFRLR\r\nBFFFBFBLRR\r\nBBFBBBFLLL\r\nBFBFFFFLLL\r\nBBFBBFBLLR\r\nBFFFBBFRLL\r\nFFFBFFBRLL\r\nFBFFFFBLLL\r\nBFBFFFFLLR\r\nBFBFFBBLLR\r\nFBFFBBFRRR\r\nFBFBBBFRRL\r\nBFFBBFBRLR\r\nBBFFFFBLLL\r\nBFBBBFFRLL\r\nBBBFFBBRLL\r\nFBFFFFBRLR\r\nBFBFFBBLLL\r\nFBFBFBBRLL\r\nFFBFFFBRLL\r\nFFFBFFBRLR\r\nFBFFFBFLLL\r\nFFFFBFFRLR\r\nBBFBBFFLLL\r\nFFFFBFBLRR\r\nBFBFFFBLRL\r\nFBBBBFFRRR\r\nBBBFFFBRRR\r\nFBBFBFFRLL\r\nFFBFFBFRRL\r\nBBFBBFBRLR\r\nFFBFBFFRLR\r\nBFBFBFBRRL\r\nFFFBFBBRLR\r\nBFBBBFFRRR\r\nFBFFFFBLRR\r\nFFBBBFBLLR\r\nFBBBFFBLRL\r\nFFFBBFFRLL\r\nFBBFFBBLRL\r\nBFFBBFBLRL\r\nFBBBBFFLRR\r\nBFFFFFFLRR\r\nFBFBBBBLRL\r\nFFBBFFFRLR\r\nBFFFFBFRRL\r\nBBBFBFBRRR\r\nFFFBBFBRRR\r\nFFFFBBBRLR\r\nFFFFBBFLRL\r\nFBBFBBFRLL\r\nBBBFBFFRLL\r\nBFBFFFFRLR\r\nBFBFBFBRRR\r\nFBFFFFFLLR\r\nBFFBFFFLRR\r\nFFBFBFBRLR\r\nBFBBBFBLLR\r\nBBFBFBFRLL\r\nBFFFFFFRRR\r\nBBBFBFBRRL\r\nFBFBBFFLRR\r\nBFBBFFBRRL\r\nBFBFFFBRLL\r\nBFBFFBFLLL\r\nBBBFBFBLRR\r\nBBFBBBBRLL\r\nFFBFFBBLLL\r\nBBFBBFBLRL\r\nFBFBBFFLLL\r\nFBBFFBFLRL\r\nBBFFFBBRRR\r\nFFBBFBFRLL\r\nBFFFFFBRLR\r\nFFBFFBFLLL\r\nBBFFBBFLLL\r\nBFFBFFBLRR\r\nFFBBFFBLLL\r\nFFFBFBFLLR\r\nFBFFBBBRRL\r\nFBFFFBFLRR\r\nBBFFFFFRRR\r\nFFBFBFBRRR\r\nFBBBFBBRRR\r\nFBFBFFBRLL\r\nFBBBBFBRRL\r\nBBFFFFBRLR\r\nFFBFBFFLRR\r\nFFBFFFBLLR\r\nBBBFFBBLRR\r\nBFFFFFBRLL\r\nBFFFFBFRRR\r\nFFBBBBBLRL\r\nFFFFBBBLRR\r\nFBBFBFBLRR\r\nFFBFFBFLLR\r\nFBBFBFBRLL\r\nBFBBFBBLRR\r\nBFBBBFBLRL\r\nBBFBBFFRRL\r\nBFBFBFBLRL\r\nFBFFFFBLRL\r\nFBFBBFBLLR\r\nFFFFBFFRRL\r\nFFFBBFFRRR\r\nFBFFFFFRLL\r\nFBFBBFBLRR\r\nFFBFFFBLLL\r\nBFFFFFFRRL\r\nFBBFBBBRRL\r\nBFFFFFBLLL\r\nFFBBFFBRRL\r\nFBFFFBBRLR\r\nBFBFBFFLRR\r\nFBBBBFFRRL\r\nFBBFFFBLRR\r\nFBFFFBFRRR\r\nFBBBFBFLLR\r\nFFFBBBBRRL\r\nFBBBBFFLLR\r\nBFBFFBBLRL\r\nFBFBFBBRRR\r\nBBFBFFFLLL\r\nFFBBFFFLRR\r\nBFFFFBBRRL\r\nFBBBBBBRRL\r\nBFBFBBFRLR\r\nBFBFBFBLLR\r\nFBBFBFFLLR\r\nBFFFFFFLLL\r\nBBBFBFBLLL\r\nBFBBFFFRLR\r\nFBFFBBBRLL\r\nBFFBFFBRLL\r\nBFFBBFFRLL\r\nFFBBBFFLRL\r\nFBBFBBBLLL\r\nFFFFBFBRRL\r\nBFBFBBBRRL\r\nBFFBBBBLRR\r\nBBFBFBBLRL\r\nFFBBBBFLRL\r\nBFBBBBFRRL\r\nBFFFBFBRLR\r\nFFFBBBFLLR\r\nFBFBFFBLRL\r\nFFBBBFFRRL\r\nFBBBFFBRLR\r\nFFBFFFFLLR\r\nFFBFBFBLRL\r\nBBBFFBBRLR\r\nFBFBBBBLRR\r\nBFBFBFBRLL\r\nFFBBBBBLLL\r\nFBFBFFFLRL\r\nFFFBFFBRRL\r\nFBFFFFFRRR\r\nBFBBBFFRLR\r\nFBFBFBFLRL\r\nBFBFBFFLLR\r\nFBFBBBFRLL\r\nBFBBBBBLRR\r\nFBBFBBFRRR\r\nBFFFBFFRLL\r\nFFFBFBFLRR\r\nFFFBBFFLRR\r\nBFBFBFBRLR\r\nFBBBFFFLLR\r\nFBFFFFBRRR\r\nFBBFFFFLLR\r\nBFFBFFFRLL\r\nFBBBFBBRLL\r\nFBFBFBBLLL\r\nBFFBFBFLLL\r\nFFFBBBFRRL\r\nFFFFBBFRRL\r\nFBFBBFFLLR\r\nBBFBFFBRRR\r\nBFBBFFBLRL\r\nFFFFBFBLLL\r\nBFBFFBFLLR\r\nBFFBBFBLLL\r\nFBBBBBBRRR\r\nFBBFFFBRRL\r\nBFFFBBBRRL\r\nBBFBBBBRRR\r\nBBFFFBFRRL\r\nBBFBFFFLLR\r\nBFFFBFFRRR\r\nBFBFBBBLLL\r\nBBFFFBFRRR\r\nBBFFBFBRLR\r\nFBFBFBBLRL\r\nBFBBFFBLRR\r\nBBFBFFBRLL\r\nBFFBBBBRLR\r\nFBBFBBFRLR\r\nFFBFBBBLLR\r\nBFBFFBBRRR\r\nFBBBFFFLRL\r\nBBBFFFFLRL\r\nBFBBBBFRLR\r\nBFFFBFBRRL\r\nFBFFFFFRRL\r\nBBFFFFFRRL\r\nFBFFBBFLRL\r\nFBBFBBBRRR\r\nBFBBBBBRLR\r\nBBFFBFFRLR\r\nFBBFFBBRRR\r\nBBBFFFBLLL\r\nFFBBBFFRLL\r\nBBFFFBBRLR\r\nFFBBBBFLLR\r\nFFBBBFBRLL\r\nBFFFBBBLRR\r\nFFFBBBBLRR\r\nFFBFBBBRRR\r\nFFBFBBBRRL\r\nBBFBBBFLRR\r\nFBBFBBBLRR\r\nFBFBFFBRLR\r\nFBFFBBFRLL\r\nBBFFFBFLRL\r\nFBBFBFBRLR\r\nBFBBBBFLLL\r\nFBBFBBFLRR\r\nFBFFFBBRRL\r\nBBFFBFFLRL\r\nBFFBBBFRRR\r\nBFFBBFBLRR\r\nFBFFFBBLLR\r\nBFFFBFBRLL\r\nFFBFBFBRLL\r\nBBFBBFBRLL\r\nBFFBFFBRRL\r\nFFFFBBFLLR\r\nBFBFBBBRLL\r\nFFFFBBBRRR\r\nFFBBBFBRRL\r\nBFFBFBBRRL\r\nBFBFBFBLLL\r\nFFBFFFBRLR\r\nFFBBFBFRLR\r\nFBBBFFBLRR\r\nBBFFBFFRRR\r\nBFFFBFFLRL\r\nBFBBFBFLLR\r\nBBFBFFBLRL\r\nFBBBFBBLLL\r\nFFBBBBBRLR\r\nBFBBFBBRLR\r\nFBBBBFBRLL\r\nFFBBBBFLRR\r\nBFFFFFBLRL\r\nBBFBFBBRRR";

let seatCodes = rawEntries.split("\r\n").map(entry => [...entry]);

let totalRows = 127;
let totalSeats = 7;

let maxId = 0;
let minId = totalRows * 8 + totalSeats;
let sumIds = 0;
let aircraftSeats = seatCodes.map(sc => {
    let rowLowerHalf = 0;
    let rowUpperHalf = totalRows;
    
    let seatLowerHalf = 0;
    let seatUpperHalf = totalSeats;
    
    let row;
    let column;
    
    sc.forEach(codeChar => {
        if (codeChar === "F") {
            rowUpperHalf -= Math.round((rowUpperHalf - rowLowerHalf)/2);
            row = rowUpperHalf;
        } else if (codeChar === "B") {
            rowLowerHalf += Math.round((rowUpperHalf - rowLowerHalf)/2);
            row = rowLowerHalf;
        } else if (codeChar === "L") {
            seatUpperHalf -= Math.round((seatUpperHalf - seatLowerHalf)/2);
            column = seatUpperHalf;
        } else if (codeChar === "R") {
            seatLowerHalf += Math.round((seatUpperHalf - seatLowerHalf)/2);
            column = seatLowerHalf;
        }
    });

    let rowId = row * 8 + column;
    maxId = rowId > maxId ? rowId : maxId;
    minId = rowId < minId ? rowId : minId;
    sumIds += rowId;
    
    return rowId;
});
console.log("What is the highest seat ID on a boarding pass? \nA: ", maxId);

let sumTotal = ((aircraftSeats.length + 1) / 2)*(minId + maxId);
console.log("What is the ID of your seat? \nA: ", sumTotal - sumIds);