import { type DateRange, formatDuration, formatPeriod } from "@/lib/dateRange";

export type SkillGroup = {
  label: string;
  items: string[];
};

export type CareerProject = {
  title: string;
  details: string[];
};

export type CareerItem = {
  dateRange: DateRange;
  periodLabel: string;
  badgeLabel: string;
  company: string;
  role: string;
  projects: CareerProject[];
};

export type ExperienceItem = {
  dateRange: DateRange;
  periodLabel: string;
  org: string;
  subtitle?: string;
  details: string[];
};

export type TroubleShootingItem = {
  title: string;
  subtitle: string;
  bullets: string[];
};

type CareerInputItem = {
  dateRange: DateRange;
  company: string;
  role: string;
  projects: CareerProject[];
};

type ExperienceInputItem = {
  dateRange: DateRange;
  org: string;
  subtitle?: string;
  details: string[];
};

const careerInputs: CareerInputItem[] = [
  {
    dateRange: { startDate: "2025-11" },
    company: "포페런츠",
    role: "Node.js Backend Developer",
    projects: [
      {
        title: "혼용 중인 아임웹, v1 서비스를 하나로 통합",
        details: [
          "아임웹, v1 서비스를 하나로 통합하여 유지보수 용이성 및 확장성 향상",
          "v1 서비스는 기존 서비스 유지보수 및 확장성 향상",
        ],
      }  
    ],
  },
  {
    dateRange: { startDate: "2025-08", endDate: "2025-10" },
    company: "퍼플아카데미",
    role: "Node.js Backend Developer",
    projects: [
      {
        title: "레거시 서비스 신규로 전체 대체",
        details: [
          "php, python, js 등 여러 언어로 개발되어 있고, 개발환경과 프로덕션 환경 배포 분리가 안 되어 있는 등 인프라 관리와 데이터 관리가 전혀 되지 않아 신규 프로젝트로 전체 대체",
          "EKS 환경에서 배포 및 관리 가능하도록 인프라 구성 - ECR, ArgoCD, Helm 활용",
          "기획 및 외주 CTO(PM역할) 조율이 제대로 되지 않아 공통으로 사용할 response 형태 통일, eslint 적용, 에러 핸들러 등의 기초 작업 진행",
        ],
      },
    ],
  },
  {
    dateRange: { startDate: "2022-02", endDate: "2025-06" },
    company: "다윈 프로퍼티",
    role: "Node.js Backend Developer",
    projects: [
      {
        title: "내부 라이브러리 및 어드민 개발",
        details: [
          "공통적으로 사용할 수 있을만한 기능들이 보이기 시작하며 모듈화 시도",
          "DB커넥션 관리, 캐시 관리, 로깅 관리 등 공통 모듈 개발로 코드 재사용률 30% 증가",
          "수동 작업 자동화 및 어드민 페이지 사용성 개선으로 휴먼에러 비율 70% 감소",
        ],
      },
      {
        title: "MSA 아키텍처 적용",
        details: [
          "서비스 단위로 분리 개발하여 유지보수 용이성 및 확장성 향상 유도",
          "서비스 간 통신비용을 줄이기 위해 http 요청을 lambda invoke 방식으로 변경해 응답시간 50% 감소",
          "AWS SQS를 활용해 서비스 간 비동기 처리 및 장애 전파 방지",
          "하지만 인력이 적어 한 사람이 여러 서비스를 담당하며 처리하다 보니 오히려 코드 추적 및 디버깅 시간 증가 문제 발생",
          "저장소를 하나로 통일하며 모노레포 구조로 관리 필요",
        ],
      },
      {
        title: "결제 시스템 구현",
        details: [
          "결제에 필요한 상품 정보, 할인 정보, 결제 정보 등을 각각 담당하는 서비스 구현 후 오케스트레이션하는 서비스 설계",
          "각 시스템을 인앱별로 분담하며 개발 시간 절반으로 단축",
        ],
      },
      {
        title: "채팅 서비스 개편",
        details: [
          "동일한 메시지가 중복으로 보이거나 읽은 메시지가 처리되지 않는 등의 버그 발생",
          "웹소켓 통신과 메시지 읽음 위치 커서 활용 등 구조적인 문제를 개선, iOS 채팅 사용 유저 200% 증가",
        ],
      },
      {
        title: "온라인 학원 사이트 개발 및 유지보수",
        details: [
          "통계 페이지 호출 api 최적화로 페이지 로딩 시간 40% 감소, 수강료 납부 시스템 개선 등",
        ],
      },
      {
        title: "전시회 이벤트 페이지 개발",
        details: [
          "고객사에서 매년 진행하던 이벤트로 전년도 대비 방문 사용자 수 약 35배 증가",
        ],
      },
    ],
  },
];

const experienceInputs: ExperienceInputItem[] = [
  {
    dateRange: { startDate: "2021-08", endDate: "2021-12" },
    org: "SW 사관학교 정글",
    subtitle: "카이스트 문지캠퍼스",
    details: [
      "알고리즘 문제풀이",
      "RB Tree, Malloc-Lab, Tiny Web Server",
      "pintOS",
      "팀 프로젝트(SuperSlap)",
      "프로젝트 개요 링크",
    ],
  },
  {
    dateRange: { startDate: "2019-10", endDate: "2021-07" },
    org: "ERP 컨설팅",
    subtitle: "내외정보기술",
    details: ["스마트 팩토리 사업 컨설팅, MS SQL 활용"],
  },
];

export const resumeData = {
  profile: {
    name: "박래성",
    role: "backend developer",
    email: "raeseong0196@gmail.com",
    phone: "010-2980-0196",
  },
  introduce: [
    "배운 것이 있을 때 희열을 느끼는 Node.js 백엔드 개발자입니다.",
    "채팅서비스의 구조가 합리적인가? DB 커넥션 수가 급등한 이유는? 공통 라이브러리가 필요하지 않을까? 항상 질문하고 답을 찾아갑니다.",
    "AWS lambda 특성으로 인한 문제, 응답 코드별 처리로 인한 오작동 등을 해결한 트러블슈팅 경험으로 문제 발생 원인을 찾고 해결 방법을 모색하는 흐름에 익숙합니다.",
    "이미 적용된 기능에도 부족한 부분은 없는지, 현재 구조의 장단점이 무엇인지 관심을 가지고 분석하길 좋아합니다.",
  ],
  skills: [
    {
      label: "실무에 바로 적용 가능한 기술",
      items: [
        "Node.js",
        "TypeScript",
        "AWS - EKS, Lambda, SQS",
        "MySQL",
        "Express.js",
        "MongoDB",
        "Redis",
        "Docker",
        "Kubernetes",
        "Nest.js",
      ],
    },
    {
      label: "사용해본 경험이 있는 기술",
      items: [
        "JAVA",
        "Kotlin",
        "Spring Boot",
        "Python",
        "Next.js(React)",
      ],
    },
  ] as SkillGroup[],
  careers: careerInputs.map((item) => ({
    ...item,
    periodLabel: formatPeriod(item.dateRange),
    badgeLabel: `${item.dateRange.endDate ? "근무" : "재직 중"} · ${formatDuration(item.dateRange)}`,
  })) as CareerItem[],
  experiences: experienceInputs.map((item) => ({
    ...item,
    periodLabel: formatPeriod(item.dateRange),
  })) as ExperienceItem[],
  troubleshooting: [
    {
      title: "환경 차이에 따른 오작동",
      subtitle: "에러페이지 캐싱, 응답 코드 처리 등의 오작동 해결",
      bullets: [
        "개발 환경에서 정상 작동하던 프로젝트가 운영 환경 배포시에 에러 발생",
        "운영 환경에서만 작동하는 코드 분기와, 에러 발생 시 처리 로직이 있음을 확인",
        "에러 발생 시 안내 페이지 응답이 프론트엔드에서 에러로 인식하지 않아 해당 페이지를 캐싱하는 1차적인 문제",
        "Next build 리소스 버전 관리로 캐싱 문제 1차 해결",
        "브라우저 언어 설정이 한국어가 아닌 경우, 영문 페이지로 리다이렉팅하는 과정에서 운영 환경의 로드밸런서는 300번대 응답 코드를 unhealthy 상태로 체크",
        "로드 밸런서를 거치지 않고 클라이언트에서 처리하도록 수정",
      ],
    },
    {
      title: "운영체제 구조 이해",
      subtitle: "crossplatform 이슈 및 docker image별 내장 라이브러리 문제",
      bullets: [
        "mac에서 빌드한 standalone 파일을 windows에서 읽지 못하는 문제 발생",
        "docker image별 내장 라이브러리 문제 - node:22.16.0-alpine 에 C library가 최소한으로만 있어 bcrypt 등의 라이브러리 오류 발생",
        "운영체제 동작 방식에 대한 이해 및 library 등 기초 라이브러리에 대한 이해로 해결",
      ],
    },
    {
      title: "AWS Lambda",
      subtitle: "인프라 구조 파악 및 문제 해결",
      bullets: [
        "결제 시스템을 MSA 아키텍처로 구축",
        "각 서비스가 AWS Lambda로 구축되었고 트랜잭션 처리를 해야하는데, cold start로 인한 지연 실행, 15분 timeout 제한, db 커넥션 관리 등의 이슈 발생",
        "각 요청별로 락핑키를 생성해 중복 요청과 에러 발생을 방지",
        "15분 timeout 제한이라 여유로운 것으로 판단했는데, api gateway는 90초 제한이 있어 코드 성능을 향상시키고 무거운 요청은 청크 단위 처리",
        "singleton 패턴으로 같은 컨테이너 내에서는 하나만 연결되도록 커넥션을 관리",
      ],
    },
  ] as TroubleShootingItem[],
};
