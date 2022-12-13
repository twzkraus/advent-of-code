/*
--- Day 3: Rucksack Reorganization ---
One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged.

Each rucksack has two large compartments. All items of a given type are meant to go into exactly one of the two compartments. The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.

The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

The list of items for each rucksack is given as characters all on a single line. A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.

For example, suppose you have the following list of contents from six rucksacks:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
The fourth rucksack's compartments only share item type v.
The fifth rucksack's compartments only share item type t.
The sixth rucksack's compartments only share item type s.
To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?
*/

const puzzleInput1 = `PcPlnShmrLmBnmcwBhrmcmbHNGFGpwdFFwGNjNbGqNHH
tzQfRJfWZZztWzVtCTfRzFZjpFjNZjGLHbdHLDdjpb
CCQTzRLzvQVVfRzJfMPsnBlglgPmBgPmvSrl
RMfvbbszHTsssFPzDQPggpQJPQ
NSNcqVtLVGgDlpQBClVB
hmStGNNLhjNrpWLGSjWrZssbZTMMvTfMnThbRRTs
fTrTPGTbfftWBBmLjrJL
DqHwVMqVplDslmlZmpHVwNnShWZFdBBdjWBtWtdtWJSSLS
MNslpDvVHlwsmpQRgQgCfTTcvcRQ
pBBhRgDsMsswprBhvgRglZtFGFFRqZtZmRtNqtZPPN
TdmmzzmdZdqdGFtF
nmSccCVmSCpDCswMwl
NptqDsQtDTQzCvlzCpRlRp
jmZcndmjbZcjrmDvFMFFlwCvzFnF
jjgLVLrGcdDBNhWQTgHg
mLVhhfSMSTmMwClHGdpjDHjGdV
zPrZgJCgbsnrPtZzsCsbpRDjBRHnjGDRldRHppcG
JJrbsFrZqrgWbbqbrgWzJPNTwhTNCmmvfWCShhhmwwfm
ftgfljvgfgBTNvtggFDDGLGRDnMDzcQzncGt
VdbpbVdZwdwrsVVLRrMrDLDBGnBGcM
wmpWwWsHWBCCCPPvjvmSqlfTTmSNgN
jSqmzmmSSDRjLMLDwqjNcMMLTTflffWCCsRsTHnHVrfHWTsr
tdbgZpgBPdgGZGGFTHVpCsCVfVsJpnWl
FnPQFvbvhFFFbvBwScjhzcqSLLSzSN
bWdgrWwwFWbgzFWzrmNbdPqttChMSRnmqSPSnqtMRM
lcPJLDDPPfpMBCRJBtQtMh
lGDGjTGLLDHPPGjlPTsswsbHNFsNrFNFsrzr
VmtHfVhBLHVtlhphjZMdnQQZZqZmQDdzQQ
CPFwPWrvWgrfNgFPCMqZzMDDbznFTqqzDQ
NNPsfffPCsBLjpVltV
ssdBBJqJhlTJLsjTJqFFmnmmnnrcmpprmmmPcRlf
gqtqzSgWQWqmnRPPcNmmQM
GqbSVtGzvgvgWbZjjBhTdhBsTZBJBZ
jhNBsPDzLjsVhLSNzgvcvbcwbBWFcgtWCc
ZQQTTHHnGpMtnpdHpQJfMgrvWWFqbcWWGgrgwCCwwF
nHpmMnQQMmHpRnHRmMJnnTShPzljzjSNmSDhLsNSPtSh
GdqnBGFdlqzFnwdSCQZjZLLDZjZRvZLDVvgQ
PsptsTcftMfcTfhTghVDvvjnRNjVZnvV
WtPfJTfftJcMTrMnpccFwlCSCGFGCbCwJSbqBl
GjFLGhjRwFjNSjSdJCBBdQJddbBc
MVvMMHRzVtHlvlcQBQJHqdpQqCBC
vDgVztvvmrgrVRrMmsrsmZzZnWhGnNhGWTLfnLwTLhLTjngL
VljjQJSsrjjrCglsCjsgjVVfDLdZGMdvvGdQMzmvzcDQMc
HqPBtcpRWwtHbbFwBHZfmfpDfvffDfMfmGvM
PwHNbcwtqFqnwtNNqPNPPWBTThjhhVTCSJTThssVnSlJJV
GCccNCrrnCrpnzrnCDPcDDrvHHTBqTPhswqhPTBTTwBhTj
VfNmRtZgWWHdBdswdjZv
SmtQfgNmVFgVLVLVmrnMpcDLGCGLGDMpCp
CrdZdZmPPjrQdRPRDqDLBqBLBSWgWgLDzF
sQhTNphsVbhhhMJfhNVGqltVSzSllBzStlzFFFWB
hsMpwQhNMZmPmrwHRj
cNVpSVRpLHRLsVWWfnfsCshW
jvqjTgqZPlJZmbPPfbpswsPb
vlqdTZdtJvqdZjgqZrtRpQFtLFRQczHGzt
JJQndVQnQgTfNvGf
ljpbWbmNbDlGTvggGvZf
mpmRbMmmNDFDmScpzCsdzrnJrsCzrrnM
tNFtNFFzzjjzjBtVNZVbjZGlpSvTllpWwvnBlWGGBGCC
fPdcrrgPHrHMMMWlppGJSPwGSnGv
fmrqrhhfhdRddHrhQqQrfnLZjLtNttZjjRtzjFtRNj
sphRcpQRhfmnmfpptg
WVPlGLlSjCjSlGSHJJWZdmbmfvPmmnftbbgDdt
LJjjqVNjlnCTRcRhhsNcFF
vwwqttFjwgClRNCCvGNmZZMmJsPJjJpTdMpsZd
fBLVHHHrFnhHhnrVSTmfdPdPccTTPsMfsJ
QzVWzznzFbWNGNlt
vjMddVVmnWpdMndjvhhWfNLpfBsfLLZLBBSqqTZq
RFlrzQJPSRGzzzzgBZNsgBZTBflfgf
cQFDRHFDDGCJShCnvwVnnhCn
hgjlpRRLlPJJhTLJMDnwBndSPBNvMqnN
FGWVfZsmCbmVzrvtwCSMtMdnDMCw
VsVmVZfVQDmVFrrmzmGrHHTJgJjhHJcllglLQJRL
rrTVcTBgsjTffmfWHZTv
JLdnDlpGlGSLlpwJpHZfFvRZnWzWrHWqFH
wQDpDrdSlSCblCdwdSLlwQGBthPMsghNsVNVtCNNhNPjhs
CtCMvNhDMHfDDdffqtDtCflpJlBpvmWWJWwlpwFFvjwB
rGSbVGZrSsFJjlmBFZWp
rbbQgzVGrFVSPPGqfhftfqztNtqHtt
lMGZCGphllZDNshNNmHHND
PLwjVwJVsHmRrZZw
ffSdzjfZSjtjSjLtLLFFFGqFzznCpCnCBblQ
CqRnlzHCRWTlHPTZVQrcQtFsQFTcrQ
DfJcdBDBcftQjsrsBtjZ
JDfdGhSvNGhNfffGSfRznPvcRWcqCqmlvlcn
JPhBBBQCnCJCMhnhMZRrRZgbDgrWrNbglDgR
jLtSTwtsShwRNpRWrh
FLLSHsjGLGczvfPfJdfhddnHPC
BjHBNrWmTjFgJngbJhWd
vsGttMDtwCMQCJnqqqFJsggqdg
GFtDSwwMpTrzSSfcfm
rnWDQvpwWpDDcPjFPPHZjVDZ
CTJCRmCJcZZZHCCQ
LdlmdQJNpnLWbrfL
VdTdcVTZwCRGVGGMVmttlF
gnrsbngfgQSpBfpMBBBpSgMNNJbmGmlqGDqDNlFFJlGNFz
gprgQhgpMMMPsrRTCdPZwCwZZCRH
cHlCVGbbWHWqRNThhcNcmh
MwQDzpwdJwpBpPDQvrhShfLTTRLfLdjfNRqS
JwMBBrPsPDwQMDPPBPQJwMrvWHFbHHlgbsGnnWHnFnRGlblF
PQPjPDjRRQSFLSlgSmLlfh
zpLdBddbNCdqGbWJGWpJWWlsFsmmFpwfflFgfHwFhgmh
nJLdLVnzqqbjRctcPDQVTP
JdztScztPdSWLJLtgMbCjhvlbPRbjbMvCh
VZrqfQcFQwGVVFqfrTFTNqhljRHDMvMMGhRDRRHGbDhG
NZQNVQQpQmrZFQQFwQQVVZgBszJJgznstnmtcztdBSgs
nFHLNJzFbLJGGLMlTTRZbZRhWRTr
wVmgBBmtmwlqlWTwTM
sdvmgcPsCPPQQSMz
SccCqmQmgBmppLQmpSMjjlJzzsNPMDRbPNPlJM
VHZvwtZwhZHtdTwrVbNsljlRDlJPDhzsbN
dZwftVRftmcgpBCmBf
NTTlVlgNSflqbphFFhNbFp
wmmLmjwzwbWGLjRmtZZdhZLFtQQLQBFh
RvjbMjjvMzMWbDWwvzPjvmWSfVfsTlVVPVgTgPfVsnnnsJ
BsBsZHZNdWwsNdrzgCrMMqsjzzMC
flfhVWFmLrhQzCCh
fVbmFSpnSSmtnPZvdWbwvdvdHZ
NsZWWWWLsBZPhfsLmPhcFCCHCMMrqfqcvHMfHH
nThSllnplGlMpvFRcCqrrr
DnTwSztgzlDnVGTwztmdZhmLdJdNDshBdsWs
RBBGTFZGglMHvrtcgSdnNgjg
DmVcbmbJmwJDJzVVwzJfmfstnztvjnNjvNSpdptvzCnpjj
DsLcfLmbhVQssQJQscWRPBZZMMRLHFHZBGMG
FVvhVnhFnFhmvFhVcMBHLgcPClrqqrtqCppldrRRTppldg
QLWfDNwsQLtlrrCtDdpq
sJwZwLsGJWGGwzzWZNbWNLjQHSVhvHSnhcMFcbVmnvcchSBS
jTMNMrHBJWWDffRqfDBqfD
QmSFphtQqQmVmqVnPnPlpwgfnRnDPl
VqFmLFbLhmZhGFGmCmGtZLtJWzWHcJrNrHMccjMscMHzMZ
hGPGmbfPzbPfgdMdWGqBGQcqpp
nvFTvDrTdNZZlrjnMHHHpBBcppqq
rNlZZNLvRdRCRFFwZwhgbmSJPSmPfhfwhS
vjdbFWTtFRRvtvZZvdWJWbGjLhCcnrrrNqLNCPqchShNqc
QHQVlDsMfmmDMHDBdLdCSLnhNLNNfqCd
VQHsMDpHlzMBBwlsmMzmmlVwptvTWdvJdbvJtRTWgGFJJGtR
nSScBcnbbFSQVdBFBtWpwtvtPbTZthtTvT
pRzHpGjCDGzHGCGsThqqwZwPhCtvhTqZ
NzlzjDDpNldBFrlfFQ
qJlDlPPWppgppqPlplpfdvgnbMfGbdgCghMdCM
QWTWZcSsWbvVvTnhfC
tRFLwZrcrWzzlJmtBqlm
HMNMvvzzNcmfNmfbhs
qVcwCgjCLtWRSLsTPbmPfmTh
RtWCJgddWRtCJdWWgdBjwWWwpzMFpHGprcBGFFnGHQZHQGpF
gZgBDgDVGDGjmDZRtgjvVvtQdnLrcRcrdfdfCcnlscsJsn
WTqzqHqNzpHpwzNhMHNwWPbQCQcCLsnCrLLfcrffNflcNn
zHTwwpTPzTTwlFTFzwqzPbwZGgGZZBtmGGvGmBGZVFStFZ
znlSSzfzTcmmfcCt
PHWWGpqgPShPMwGwqJFTVtwtCVTCmTJcFc
qHqqSggLrRLBbvDDdndzRQ
WBddBQWZWWQqqQFMWfmrWsJnmVJJNDDVJGsLmHmLDN
PTgCjvCCPPPzSZGJVLsVZCHHnH
pzwtPTvzTjRTPtwSjPSzRgBbWMBfMwwZfbWrMrZFqFFM
BqDwVqdqlDlblQMf
ZcCWWcWzvJZjcPjZZZfTHfQJQHThqpMbQQJf
LPCcZcczZLgCjvPWgvstjsjmRRBdmGrdGdmSFGnFrtGmqr
CBvgQssVzfCBQSgvvvfmrlGrCtMGwthJlJtbrh
TpLqLRFpqdRpRTfNPtRmrMMtMlMMmlMJlt
PZTjqFFTHZZNZpqcVWzVvgzcWnSWfBDD
SVSTpgpVpdNbpcVdfjcNfbcJnqsltcJPvRJqRwQqlQsJls
zhWzDLmFHhmrWZmmzHJJQlnswqsvttrstQqs
zGtZFGGCmZmGGFhLBWBGGFdgVjgppMTSTgMfCNfVVSdj
CzjNJGcnzQJltPHttcPHTP
bLVsqLbLmSSVrqmdhVSmsVFFprfrFWrwTTWWWZpFPtlP
ssDsMqLqhvmvhdmdvzRCnQgRzzBjgnlNCM
TzTLzzSGRlRSjWzlWRzHGTpNhPhJPmdnNPPbhlbPbdhfPh
mBCDBVrCqVQvQMBcVcqBrBDsbtJfnZNbJndNNhthZNJfPZPs
wMCrqVvBzmzHTGLw
NbfwfZPPdVNPdBdQBcmQzrQz
nnWqHLWGFMDFDLDjsqnHLsrQGzmJczmQrgJmJGZmQrgJ
FFWRsHMHCZCWFwRwphpvlfTTpp
PclPlVZvLDNvVZSLSMvvDttmtfzFtzHqtqtzzccCFc
jrggQGhjQsTDbrbJjJQqzzCsdtzzFCdHqmBBHz
WGDgngwrQggZMNvMWPMRRV
wNgpMdMMcdSscccNcLLTbtQJtQJQltJwFtlBlzBt
HHGhrLrCvHWHCPhrWDtnBllnQbfQftGnfnBF
HvLjWCLHPZvHHHZjjrqVTTZVcppMgNNNNSpS
QQrwQmvWQjgTfvBjfffrSDcrqSqDDVLctqqcVd
GnHFnGhGplGMlHMNhzBzlLPLVcVNCPDqVNdcqLdqtV
GnMGpslMhGsRzzHzGsZFZQJTTmWfBbvfgfgJRfbwbW
MRCtSwMhvjCGtvMZDVWpVZJlVccNDlpb
gdLQFFwwLfHJWnQlcJJbWc
rdqdmqHLTLmsswsFHLFtMPRMCSSRtSjTPMPSCR
jmCCnLCLZjZjRjQTLZQhGPGhhzHhDRGRDzwzwh
stlJlrlJJcSSfSMMzPfhhGhzpwhpNwhD
rbrbBcSlWmdZWjDnTm
PNBRNnnqQRNfVfRtVVzgFLLttpSwgzzzmFFF
fcWlcbvvCFzLbwLw
rlrMrhTJhDcTTfhRNqHRQPQRQNQB
TrprpprRVVfpRpVqTVpzDdvmvbbCchhcttqcthSMdd
JlnZnFlsMBZnJHlsLsCLbSNtbNhdbbShCScm
FlZjjsHHsnQFQwTDzMRRpGRR
wHWzwCTTqJhzzvJhWHWhqJWrFsFQrrrFCfFfgjjgjprfsp
DBRmZRtZLbnRBGSBmtGSLpjBrrsfrgsTQVrVrrPrgr
DLnbcbtLtmNNmbRcGbcGmHzlThNNhqJTHdvqvWlHJh
GSNqjRcqflNLnCTTWrWn
BmwQtmtJwPwmzMwQtHtVssvrnpWTTnsTTgpVCLCs
DBBQHJJrzhzQDDfSljRfhccfcdZf
wtgtChCwzqgLzjggqtHtjFHHFcnPfdRDfZZVcPfVZZfGnfdm
vBTrRTTWGGmcTDVD
SJMbbpWslJblSSNzNsztRChzqRCj
gBHHCtVCSHMQlfFTQqCfmq
WrpdwjbwbwQGlPqSqblP
wWDncWrDDNdWNRjScScjpzvHZtBMZtJsvLVgvzssBsvs
VppWpVfmZPBlnmrGBzhttMzMpctLLcChSh
FwgLJvRdHcwMzSzjzc
QvbgdQLQgDvsqvqRHRDdDQDBWmBGBflnVbZmZmmnBBWrmW
SqShwLFCQGpDHCtZCWpW
bdHPHjTbJdsMnPHPbdjgtnBlVlBnVgtZpDBpWV
bdmPcjbjMNMvvHbTcQRNfRwRwLffwwqwNF
zdRHTpQTQHQnpnnQRHTsNNlJSJWmzJmJllNmSG
FBbRvLbFRwLqbbVgBVqqLFqJtJNcltsSGmgmGtNtgWmstm
FLhhfvvVwvjqfLRBqLVqbwqZQrTTpHMHjdrpnnDPDQCdCrpC
JgjzvbJCWgbjgGbJWjRhgNPGHHBMtqBStZZsHMSsBqtD
cfQdwQFdQQppnVVnlFLLBsBZMhqPlPMMqBSHDtHM
wnQhcnVddmdWgjvjmvRjjJ
QpcRtndvsLcVJtRSzWSlWjzSbjjWBv
qGZPqCTmGPqgGTCqHgCqZCPFWbbBNBMNBbdBMlWWrbjlMbFl
qhHDGhCmPhZHgDmDVQthttRchLwLdwcc
srpPMwlMmsrGFGswvDRhRWRDJJJchJ
fSgBbCBNnBTTgCNLTCRJhRJVWhTcVVVFFJdR
SbBnnLNZCLFQCZjnCnZFjPrzqmlMmmsrpzrlsmtt
BBsfDfsBDSWRwlLqmWCpWcllrl
nQMgMnnnhdntgMBrCdpNNLNlNqLqLl
FnQFHzPQJjJGRBGvfR
lRnVRFFlgMCRVwLgFZRnZQHWdcftHdmcJHmmMdzzfz
DGBqGQbhhBDbSBpGDBzqdNHJdtmcWdqdmtcm
bjbsBvjhSlVsPRgLQl
dDLbRdTMRJMbFRzZBfzNSjtNBzBD
PmgspqqVrppTVrvrsPhhfQwZBwNjNtNffzqqfwwN
mCcmsngrPvpVTssCVsvsPLRRJllGFlnRGbMJMWWlJJ
fGlGZHRRbwgPbZRRNCdcSWpncnQtQWlWcWpW
JrTLJgVvVLQQvtSvQncQ
JrrrmMTBVTmjBMrVjrshmJzgCfzRPCRZPGHfbwNPzbZHNH
qqqlDDZzVVnNqHDDFFFNlQpzjrTvsvzTbgJQQggjJp
cWPWcCmMfCMWdtPMhMbQQQjGGjpdvjTbjgjr
WtMSBCtCwchChMfBWtcPnNVNqZZLDRNqTRnnlwHn
mvQQnhBvhmvBmncmZBclTZTQccRFNFFdqFFgVqSRrgFrppNR
MjzJPzGPfffMCjVVjfPHLCFRNFStqrdRSdqdNGRqNptq
HDJHPjDJLfjbzfwPjCzCWWTwlmQhBnsWBvVsvBvZ
RVjcshhscQhrVjhvzjVfDNnzGtftmDHFttFGGf
qLcBCCMBJJbTdBDnNtdfnmDG
WpZgLLclTclRwgjgsrwsvj
shhhltNPcDtlNcNMcsctNtppLZvWWFLTFFZpTZDQgFLT
dRgJVzRHbqnLpTWQvLLJfp
mCVCdzqHndbqHCrVqRrmbwtNBsmPwNmScPgtPhBclw
bDDZMDrFPsrsMcsrbJZJdMMGpSzpSbwRSSRGpCHCGzlhCC
BWWNQjBLQVHhlGpSCmwj
ffwnNwfgtnNgVVwfNWBWnFsMJTJTcPFJcTFDsrJstJ
vQbQLQBpBvbvpHplHNTHWGZDngntZCQGgZhGhtjG
rqccPPmcrffRmsmCjVgnrGChChDjgW
fqRJsJMSlSzSWTbT
brsjjJPJwrJJsrRRlllNQGWQpwppCtfGGtWzGGMQ
ncBqqLTDnmLgVDZVnBDmdtVVtMzWWdMCQdpQWdVz
hDZgTSSnTzNPNFSFPF
VZVJJtWTsfTVVWsJhPWrCjzSBJlHSmjJCRlNSSlz
CqMpwccgvvgLnvLbMMRRjBNHzjmGmwNHlmlN
gLqqvpCDfVDrTfVW
CNMDGNPPNJCGbLnTffsTLT
tcBBRlrBdQrtmtWFjjbnrTjjFbjr
cTQQhcmvcBRcwDMVDZZPPCJh
mBCdgPLgZmLfGmfvGhtRQJWjtjQGQhtN
pMwrVwbwHMsqcTWQhQWzggTTWp
nnSMwrlrsmSZgvvmDd
WNSzpCzNzqzNdmqrRHrrLHFrJH
MtPfvnGMPnMcbnRtDHTRFFDrmJRQ
PcBsfPPHPGGfcSzZjNjpNZZdCs
mDCZVLDhWVSDCRvGtsGgGRHl
JjPwPNdcPnjPdcwNltHzzGmgGJzQJJRQ
dqfjnNmwmbmWrZMbMrThhB
qtBpNZFpBGFNfZNPmZPmQmHrmPPPTz
LLwJLvDvlWWLHdwDrVcCRcDVzzVVcV
sMMwvgjnMvjvnlsvNFBqfGHFqHGjtSpS
MmZZsFgwJTdTMdgmZdZRgFhDHhPQPPnRPhCrHhnnrPDD
fBcLlNNpQCDLDJJC
jSbWWlWpBpclWlWpNWlVBbWVdgwswFJmFJsGtdMggZFGbZwd
CMVQVMLLMFGRCMWQttnqqwQwhqsm
pJzlczSpPpPgmsqNhmPGDstq
gZgTccZGGpzdpjclGRVMVRFRMFvHRLRdLf
FMWMSBtStZqZWQtFtScWWSZmHPVJJVHwwlTgmgbzQwbwTJ
jhGLhdjNjsLvLsshzHJPVdVmmbzHzdHJ
jvDRNjnDNGRCzjLzZZpqnrFBSccWrMcB
zggmthDDghHvtrdgrVWfSBRwTHLWHwsBWw
PGGjpCjQnJQGJcJnnQpjFWVSsZWVLRZLBcsWSZBRWS
FGQlpnJCbqqGGRCjjnlCqGMtdNmmmvdNmmmzvhbrmgMz
TstvBTdgBhqTsdTcPlfCSrNMrNnrCNNSNNgp
HwLQwQDZzDjnDbmMhNSnmm
FZLVzLLQHRRzwWHjdPlJctlJtlsllhRs
fBtPsMDDswHvBmmVdBlSBRcGGnhVhg
LWJbrpFqpTLTTjqqNWlhnRGGSnhrcSdlRlsh
JWNbbpjJzTbNNNJNJMvmvfZHvzDsHDCsZw
LPGnPNLtwGhFFnJPfsqpVVszzpsP
TcWdvlrcWddggrDBDDdDMmWzRJqfVQZqmsfZsRQzZfZzQJ
TldWrMrDdlDCDdMTcwSLVCSShLNSwHjhGF
JGsWWWQsJmPwQWbBPmccbcbqFfMMpFDVCDFVFVCDqqfFwD
ZtLnlvLnNtvLndnCmfMVSmVCClfpVp
zTzZtjnZNLNmZvdtznntHHZJbBRGBRQWcJGbGsbsJRPQWT
MLmlMTPtQtMNlhbqbbqhflBB
rcrvjpSvScbRbBvbDBPG
ZZJzSHpzPrJzHFmMVMFmHCLNtV`;

const exampleInput1 = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

// i: coded list of items in rucksacks
// o: priority value of the shared item in both compartments, summed across all bags

// split each rucksack in half
// find the letter of the shared item
// convert it to a priority value

const getPriorityValue = (char) => {
  const alphabetTwice = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabetTwice.indexOf(char) + 1;
};

const getCharMap = (compartment) => {
  return compartment.split("").reduce((map, char) => {
    map[char] = map[char] || 0 + 1;
    return map;
  }, {});
};

const getIntersection = (charMap1, charMap2) => {
  for (const char in charMap1) {
    if (charMap2[char]) {
      return char;
    }
  }
};

const getSharedItemChar = (rucksack) => {
  const compartmentLength = rucksack.length / 2;
  const compartment1 = rucksack.slice(0, compartmentLength);
  const compartment2 = rucksack.slice(compartmentLength);
  const cmap1 = getCharMap(compartment1);
  const cmap2 = getCharMap(compartment2);
  const intersection = getIntersection(cmap1, cmap2);
  return intersection;
};

const solvePart1 = (puzzleInput) => {
  const rucksacks = puzzleInput.split("\n");
  return rucksacks.reduce((total, rucksack) => {
    const sharedItemChar = getSharedItemChar(rucksack);
    const priorityValue = getPriorityValue(sharedItemChar);
    return total + priorityValue;
  }, 0);
};

console.log("part 1 example result is", solvePart1(exampleInput1));
console.log("puzzle input 1 result is", solvePart1(puzzleInput1));

/*
--- Part Two ---
As you finish identifying the misplaced items, the Elves come to you with another issue.

For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
And the second group's rucksacks are the next three lines:

wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges. In the second group, their badge item type must be Z.

Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (r) for the first group and 52 (Z) for the second group. The sum of these is 70.

Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?
*/

// i: coded list of items in rucksacks
// o: priority value of badges for each 3-elf group, summed across all groups

const findCommonItem = (rucksack1, rucksack2, rucksack3) => {
  const charMap1 = getCharMap(rucksack1);
  const charMap2 = getCharMap(rucksack2);
  const charMap3 = getCharMap(rucksack3);

  for (const char in charMap1) {
    if (charMap2[char] && charMap3[char]) {
      return char;
    }
  }
};

const solvePart2 = (puzzleInput) => {
  let totalPriority = 0;
  const rucksacks = puzzleInput.split("\n");
  for (let i = 0; i < rucksacks.length; i += 3) {
    const commonItemChar = findCommonItem(
      rucksacks[i],
      rucksacks[i + 1],
      rucksacks[i + 2]
    );
    const priorityValue = getPriorityValue(commonItemChar);
    totalPriority += priorityValue;
  }
  return totalPriority;
};

console.log("part 2 example result is", solvePart2(exampleInput1));
console.log("part 2 result is", solvePart2(puzzleInput1));
