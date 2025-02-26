/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia';
import { type Ref, ref } from 'vue';

export const useDataStore = defineStore('dataStore', () => {
  const basicInfoData: Ref<any[]> = ref([]);
  const applicantInfoData: Ref<any[]> = ref([]);
  const inventorInfoData: Ref<any[]> = ref([]);
  const agencyInfoData: Ref<any[]> = ref([]);
  const citationFamilyInfoData: Ref<any[]> = ref([]);
  const priorityPCTInfoData: Ref<any[]> = ref([]);
  const legalStatusData: Ref<any[]> = ref([]);
  const assessmentData: Ref<any[]> = ref([]);

  function setData(key: string, data: any[]) {
    switch (key) {
      case 'basicInfo': basicInfoData.value = data; break;
      case 'applicantInfo': applicantInfoData.value = data; break;
      case 'inventorInfo': inventorInfoData.value = data; break;
      case 'agencyInfo': agencyInfoData.value = data; break;
      case 'citationFamilyInfo': citationFamilyInfoData.value = data; break;
      case 'priorityPCTInfo': priorityPCTInfoData.value = data; break;
      case 'legalStatus': legalStatusData.value = data; break;
      case 'assessment': assessmentData.value = data; break;
    }
  }

  return {
    basicInfoData,
    applicantInfoData,
    inventorInfoData,
    agencyInfoData,
    citationFamilyInfoData,
    priorityPCTInfoData,
    legalStatusData,
    assessmentData,
    setData,
  };
});
