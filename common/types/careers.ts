export interface CareerProps {
  translationKey: string;
  company: string;
  logo: string | null;
  location: string;
  start_date: string;
  end_date: string | null;
  industry: string;
  link: string | null;
  indexCareer?: number;
  isShow?: boolean;
}
