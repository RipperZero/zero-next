declare module "@api.mockapi" {
  type GetPatientList = Array<{
    userName: string;
    test: string;
    id: string;
    patientList: Array<{
      createdAt: Array<number>;
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
