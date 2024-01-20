type ErrorResponse = {
  statusCode: string;
  path: string;
  method: string;
  timeStamp: Date;
  error: string;
};

enum Gender {
  'male',
  'female',
  'other',
}
type LoginResponse = {
  accessToken: string;
  user: Omit<User, 'accessToken'>;
};

type User = {
  accessToken: string;
  id: string;
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  accountType: string;
  gender: Gender;
  socialUrls?: string[];
  stack?: string[];
  industry?: string;
  tools?: string[];
  jobTitle?: string;
  interestedTools?: string[];
  profilePicture?: string;
  yearsOfExperience?: string;
  createdAt?: Date;
  updatedAt?: Date;
  country?: string;
  hasExperience?: boolean;
  learningPeriod?: string;
  emailVerifiedAt?: string;
  careerSummary?: string;
  company?: string;
};
