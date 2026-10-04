export interface ClubContact {
  email: string;
  phone: string | null;
  institution: string;
  location: string;
  linkedin: string;
}

export const clubContact: ClubContact = {
  email: "ideatech@cb.amrita.edu",
  phone: null,
  institution: "Amrita Vishwa Vidyapeetham",
  location: "Coimbatore, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/company/idea-amrita/",
};
