
export interface Nurse {
  id: string;
  name: string;
  level: 'RN' | 'LPN' | 'CNA';
  specialties: string[];
  experience: number;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  location: string;
  imageUrl: string;
  isVerified: boolean;
  isOnline: boolean;
  about: string;
}

export interface VitalSign {
  type: 'BP' | 'HR' | 'Temp' | 'O2' | 'Mood';
  value: string;
  unit?: string;
  status: 'normal' | 'warning' | 'alert';
  timestamp: string;
}

export interface Medication {
  id: string;
  time: string;
  name: string;
  dosage: string;
  instructions: string;
  isDone: boolean;
  proofUrl?: string;
}

export interface Incident {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'severe';
  title: string;
  description: string;
  timestamp: string;
  patientName: string;
  nurseName: string;
  status: 'open' | 'resolved' | 'investigating';
}
