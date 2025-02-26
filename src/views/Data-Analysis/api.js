import axiosInstance from "@/config/axios"


export  const postDetail = (data,id)=> {
  return axiosInstance.requestMethod('get', `/search/${id}`, {"id":data})
};






// export interface PatentInformation {

//   //专利基本信息
//   SerialNumber: string        // 序号
//   TitleCN: string             // 标题 (中文)
//   TitleEN: string             // 标题 (英文)
//   AbstractCN: string          // 摘要 (中文)
//   AbstractEN: string          // 摘要 (英文)
//   Applicant: string           // 申请人
//   PublicationNumber: string   // 公开（公告）号
//   PublicationDate: string     // 公开（公告）日
//   ApplicationNumber: string   // 申请号
//   ApplicationDate: string     // 申请日
//   PublicationType: string     // 公开类型
//   PatentType: string          // 专利类型
//   PublicationCountry: string  // 公开国别
//   IncoPatLink: string         // 链接到incoPat
//   TitleOriginal: string       // 标题（小语种原文）
//   AbstractOriginal: string    // 摘要（小语种原文）
//   FirstClaim: string          // 首项权利要求
//   FirstClaimTranslation: string // 首权翻译
//   IndependentClaim: string    // 独立权利要求
//   ClaimCount: number          // 权利要求数量
//   IndependentClaimCount: number // 独立权利要求数量
//   DependentClaimCount: number // 从属权利要求数量
//   DocumentPages: number       // 文献页数
//   FirstClaimWordCount: number // 首权字数
//   TechnicalEffectSentence: string // 技术功效句
//   TechnicalEffectPhrase: string  // 技术功效短语
//   TechnicalEffectLevel1: string  // 技术功效1级
//   TechnicalEffectLevel2: string  // 技术功效2级
//   TechnicalEffectLevel3: string  // 技术功效3级
//   TechnicalEffectTRIZ: string    // 技术功效TRIZ参数
//   Usage: string               // 用途
//   IPCMainClass: string        // IPC主分类
//   IPC: string                 // IPC
//   LocarnoClass: string        // 洛迦诺分类号
//   EC: string                  // EC
//   CPC: string                 // CPC
//   UC: string                  // UC
//   FI: string                  // FI
//   FTerm: string               // F-term
//   NationalEconomyClass: string // 国民经济分类
//   MainIndustry: string        // 国民经济行业(主)
//   EmergingIndustryClass: string // 新兴产业分类
//   MainEmergingIndustry: string  // 新兴产业(主)
//   KnowledgeIntensiveClass: string // 知识密集型分类
//   SubjectClass: string        // 学科分类
//   CleanEnergyIndustry: string // 清洁能源产业
//   CleanProductionIndustry: string // 清洁生产产业
//   DigitalEconomyCoreIndustry: string // 数字经济核心产业
//   DocumentTypeCode: string    // 文献种类代码
//   EstimatedExpiryDate: string // 预估到期日

//   //申请人信息
//   ApplicantTranslated: string // 申请人(翻译)
//   ApplicantOther: string      // 申请人(其他)
//   StandardizedApplicant: string // 标准化申请人
//   StandardizedCurrentOwner: string // 标准化当前权利人
//   CurrentOwner: string        // 当前权利人
//   FirstApplicant: string      // 第一申请人
//   ApplicantCount: number      // 申请人数量
//   ApplicantType: string       // 申请人类型
//   ApplicantCountry: string    // 申请人国家/地区
//   ApplicantAddress: string    // 申请人地址
//   ApplicantAddressOther: string // 申请人地址(其他)
//   ApplicantProvinceCode: string // 申请人省市代码
//   ApplicantCityCN: string     // 中国申请人地市
//   ApplicantDistrictCN: string // 中国申请人区县
//   CurrentOwnerAddress: string // 当前专利权人地址
//   BusinessAlias: string       // 工商别名
//   BusinessEnglishName: string // 工商英文名
//   BusinessRegisteredAddress: string // 工商注册地址
//   BusinessType: string        // 工商公司类型
//   BusinessEstablishmentDate: string // 工商成立日期
//   BusinessCreditCode: string  // 工商统一社会信用代码
//   BusinessRegistrationNumber: string // 工商注册号
//   BusinessListingCode: string // 工商上市代码
//   BusinessStatus: string      // 工商企业状态

//   //发明人信息
//   Inventor: string            // 发明人
//   InventorOther: string       // 发明(设计)人(其他)
//   FirstInventor: string       // 第一发明人
//   CurrentInventorName: string // 当前发明人名称
//   InventorCount: number       // 发明人数量
//   InventorCountry: string     // 发明人国家/地区
//   InventorAddressOriginal: string // 发明人地址（原始）
//   InventorAddressOther: string // 发明(设计)人地址（其他）

//   //代理与审查信息
//   Agency: string              // 代理机构
//   Agent: string               // 代理人
//   Examiner: string            // 审查员
//   AssigneeAddress: string     // 受让人地址
//   EPDesignatedCountry: string // EP指定生效国

//   //引证与同族信息
//   CitedPatent: string         // 引证专利
//   CitedByPatent: string       // 被引证专利
//   SelfCitationInfo: string    // 自引信息
//   OtherCitationInfo: string   // 他引信息
//   SelfCitedInfo: string       // 被自引信息
//   OtherCitedInfo: string      // 被他引信息
//   FamilyCitation: string      // 家族引证
//   FamilyCited: string         // 家族被引证
//   CitedApplicant: string      // 引证申请人
//   CitedByApplicant: string    // 被引证申请人
//   FamilyCitedApplicant: string // 家族引证申请人
//   FamilyCitedByApplicant: string // 家族被引证申请人
//   CitationCount: number       // 引证次数
//   CitedByCount: number        // 被引证次数
//   SelfCitationCount: number   // 自引次数
//   OtherCitationCount: number  // 他引次数
//   SelfCitedCount: number      // 被自引次数
//   OtherCitedCount: number     // 被他引次数
//   FamilyCitationCount: number // 家族引证次数
//   FamilyCitedCount: number    // 家族被引证次数
//   CitedScientificLiterature: string // 引证科技文献
//   CitationCategory: string    // 引证类别
//   CitedByCategory: string     // 被引证类别
//   CitationSource: string      // 引证来源
//   CitedBySource: string       // 被引证来源
//   CitedByCountry: string      // 被引证国别(forward)
//   SimpleFamily: string        // 简单同族
//   ExtendedFamily: string      // 扩展同族
//   DocDBFamily: string         // DocDB同族
//   SimpleFamilyID: string      // 简单同族ID
//   ExtendedFamilyID: string    // 扩展同族ID
//   DocDBFamilyID: string       // DocDB同族ID
//   SimpleFamilyCount: number   // 简单同族个数
//   ExtendedFamilyCount: number // 扩展同族个数
//   DocDBFamilyCount: number    // DocDB同族个数
//   FamilyCountry: string       // 同族国家/地区

//   //优先权与PCT信息
//   PriorityInfo: string        // 优先权信息
//   PriorityNumber: string      // 优先权号
//   PriorityDate: string        // 优先权日
//   EarliestPriorityDate: string // 最早优先权日
//   PriorityCountry: string     // 优先权国别
//   PCTApplicationNumber: string // PCT国际申请号
//   PCTPublicationNumber: string // PCT国际公布号
//   PCTNationalPhaseDate: string // PCT进入国家阶段日
//   ParentCase: string          // 母案
//   DivisionalCase: string      // 分案
//   DualApplication: string     // 一案双申

//   //法律状态与有效性
//   PatentValidity: string      // 专利有效性
//   CurrentLegalStatus: string  // 当前法律状态
//   LegalStatus: string         // 法律状态
//   LegalDocumentDate: string   // 法律文书日期
//   LegalDocumentNumber: string // 法律文书编号
//   ReexaminationRequester: string // 复审请求人
//   InvalidationRequester: string // 无效请求人
//   ReexaminationDecision: string // 复审决定
//   ReexaminationInvalidationDate: string // 复审无效决定日
//   ReexaminationLegalBasis: string // 复审无效法律依据
//   AssignmentCount: number     // 转让次数
//   AssignmentExecutionDate: string // 转让执行日
//   Assignor: string            // 转让人
//   AssignorType: string        // 转让人类型
//   Assignee: string            // 受让人
//   AssigneeType: string        // 受让人类型
//   StandardAssignee: string    // 标准受让人
//   LicenseCount: number        // 许可次数
//   LicenseContractDate: string // 许可合同备案日期
//   Licensor: string            // 许可人
//   LicensorType: string        // 许可人类型
//   Licensee: string            // 被许可人
//   LicenseeType: string        // 被许可人类型
//   CurrentLicensee: string     // 当前被许可人
//   LicenseType: string         // 许可类型
//   PledgeCount: number         // 质押次数
//   Pledgor: string             // 出质人
//   Pledgee: string             // 质权人
//   CurrentPledgee: string      // 当前质权人
//   LitigationCount: number     // 诉讼次数
//   Plaintiff: string           // 原告
//   Defendant: string           // 被告
//   LitigationType: string      // 诉讼类型
//   Court: string               // 法庭
//   CustomsRecord: string       // 海关备案
//   ReexaminationDecisionDate: string // 复审决定日
//   InvalidationDecisionDate: string // 无效决定日
//   OralHearingDate: string     // 口审日期
//   LegalEvent: string          // 法律事件
//   ReexaminationRequestDate: string // 复审请求日
//   LicenseContractNumber: string // 许可合同备案号
//   PledgeNumber: string        // 质押号
//   AssignmentRegistrationNumber: string // 转让登记号
//   AssignmentRegistrationDate: string // 转让登记日
//   FirstPublicationNumber: string // 首次公开号
//   FirstPublicationDate: string // 首次公开日
//   GrantPublicationNumber: string // 授权公告号
//   GrantPublicationDate: string // 授权公告日
//   SubstantiveExaminationDate: string // 实质审查生效日
//   SubstantiveExaminationDuration: number // 进入实质审查时长
//   ExaminationDuration: number // 审查时长
//   ExpiryDate: string          // 失效日
//   PatentLifetimeMonths: number // 专利寿命（月）

//   //标准与价值评估
//   StandardType: string        // 标准类型
//   StandardProject: string     // 标准项目
//   StandardNumber: string      // 标准号
//   IncoPatValue: number        // 合享价值度
//   TechnicalStability: string  // 技术稳定性
//   TechnicalAdvancement: string // 技术先进性
//   ProtectionScope: string     // 保护范围
// }
