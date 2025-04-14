// Define the structure for a service item used in CoreServicesSection
// Ideally, import this from types/index.ts if defined globally
export interface CoreServiceItem {
    id: string | number;
    title: string;
    description: string | React.ReactNode;
  }
  
  // Mock data for the accounting core services section
  // TODO: Replace with actual content
  export const mockAccountingServices: CoreServiceItem[] = [
    {
      id: 1,
      title: "Accounting & Tax",
      description: "We provide comprehensive accounting and tax services tailored for individuals and businesses, ensuring compliance and optimizing financial health.",
    },
    {
      id: 2,
      title: "Bookkeeping",
      description: "Maintain accurate financial records effortlessly with our professional bookkeeping services, giving you clarity and control over your finances.",
    },
    {
      id: 3,
      title: "Business Advisory",
      description: "Leverage our financial expertise for strategic business planning, cash flow management, and forecasting to drive sustainable growth.",
    },
     {
      id: 4,
      title: "Payroll Services",
      description: "Streamline your payroll processes with our reliable and efficient payroll services, ensuring accuracy and compliance.",
    },
  ];
  