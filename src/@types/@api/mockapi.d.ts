declare module "@api.mockapi" {
  type GetPatientList = Array<{
    wardNumber: string;
    wardId: string;
    patientList: Array<{
      createdAt: string;
      name: string;
      kanaName: string;
      gender: string;
      department: string;
      ward: string;
      wardRoom: string;
      hospitalizationDay: number;
      ADL: number;
      diseaseCondition: number;
      treatment: number;
      patientId: string;
      wardId: string;
    }>;
  }>;
}
