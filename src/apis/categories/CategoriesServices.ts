// import { useState, useEffect } from 'react';
// import CategoriesApi, {
//   Province,
//   District,
//   Ward,
//   CareerTitleDetail,
//   Experience,
//   Profession,
//   EducationLevel,
//   RecruitmentStatus,
//   // Benefit,
//   Company,
//   Department,
//   TypeOfWorks,
//   BlockDepartment,
//   WorkingTimes,
// } from './CategoriesApi';
// import { SelectData } from '../../interface/interface';

// //fetch data
// export const useFetchCategoriesData = () => {
//   // const [fetchTrigger, setFetchTrigger] = useState(false);

//   const [experience, setExperience] = useState<Array<Experience>>([]);
//   const [profession, setProfession] = useState<Array<Profession>>([]);
//   const [educationLevel, setEducationLevel] = useState<Array<EducationLevel>>(
//     []
//   );

//   const [careerTitles, setCareerTitles] = useState<Array<CareerTitleDetail>>(
//     []
//   );

//   const [province, setProvince] = useState<Array<Province>>([]);
//   // const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
//   const [districts, setDistricts] = useState<Array<District>>([]);
//   // const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
//   const [wards, setWards] = useState<Array<Ward>>([]);

//   const [allDistricts, setAllDistricts] = useState<Array<District>>([]);
//   const [allWards, setAllWards] = useState<Array<Ward>>([]);

//   const [recruitmentStatus, setRecruitmentStatus] = useState<
//     Array<RecruitmentStatus>
//   >([]);

//   const [company, setCompany] = useState<Array<Company>>([]);
//   // const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
//   const [departments, setDepartments] = useState<Array<Department>>([]);
//   const [allDepartment, setAllDepartment] = useState<Array<Department>>([]);
//   const [typeOfWorks, setTypeOfWorks] = useState<Array<TypeOfWorks>>([]);
//   const [workingTimes, setWorkingTimes] = useState<Array<WorkingTimes>>([]);
//   // const [benefits, setBenefits] = useState<Array<Benefit>>([]);
//   const [companyTransform, setCompanyTransform] = useState<Array<SelectData>>();
//   const [departmentTransform, setDepartmentTransform] =
//     useState<Array<SelectData>>();
//   const [blockDepartments, setBlocksDepartment] = useState<
//     Array<BlockDepartment>
//   >([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await CategoriesApi.getCategoriesData();
//         const {
//           listExperience,
//           listProfessions,
//           listEducationLevel,
//           listCareerTitles,
//           listProvinces,
//           listDistricts,
//           listWards,
//           listRecruitmentStatus,
//           listCompanies,
//           listDepartments,
//           listTypeOfWorks,
//           // listBenefits,
//           listBlockDepartments,
//           listWorkingTimes,
//         } = response.data;
//         setExperience(listExperience);
//         setProfession(listProfessions);
//         setEducationLevel(listEducationLevel);
//         setCareerTitles(listCareerTitles);
//         setProvince(listProvinces);
//         setDistricts(listDistricts);
//         setAllDistricts(listDistricts);
//         setWards(listWards);
//         setAllWards(listWards);
//         setRecruitmentStatus(listRecruitmentStatus);
//         setCompany(listCompanies);
//         setDepartments(listDepartments);
//         setAllDepartment(listDepartments);
//         setTypeOfWorks(listTypeOfWorks);
//         setWorkingTimes(listWorkingTimes);
//         // setBenefits(listBenefits);
//         setBlocksDepartment(listBlockDepartments);
//         transformCompany();
//         transformDepartment();
//       } catch (error) {
//         console.error('Error fetching address data:', error);
//       }
//     };
//     fetchData();

//     return () => {
//       console.log('=======session======');
//     };
//   }, []);
//   const transformCompany = function () {
//     const arr: Array<SelectData> = [];
//     arr.push({ value: 'all', label: 'Tất cả' });
//     for (const obj of company) {
//       const selectData: SelectData = {
//         value: obj.code,
//         label: obj.name,
//       };
//       arr.push(selectData);
//     }
//     setCompanyTransform(arr);
//   };
//   const transformDepartment = function () {
//     const arr: Array<SelectData> = [];
//     arr.push({ value: 'all', label: 'Tất cả' });
//     for (const obj of departments) {
//       //if (obj.parentCode == companyCode) {
//       const selectData: SelectData = {
//         value: obj.code,
//         label: obj.name,
//       };
//       arr.push(selectData);
//       //}
//     }
//     setDepartmentTransform(arr);
//   };
//   return {
//     blockDepartments,
//     experience,
//     profession,
//     educationLevel,
//     careerTitles,
//     province,
//     districts,
//     // setSelectedProvince,
//     // setSelectedDistrict,
//     setAllDepartment,
//     wards,
//     setDistricts,
//     setWards,
//     allDistricts,
//     allWards,
//     recruitmentStatus,
//     company,
//     departments,
//     allDepartment,
//     setDepartments,
//     typeOfWorks,
//     workingTimes,
//     // benefits,
//     setAllWards,
//     setAllDistricts,
//     companyTransform,
//     departmentTransform,
//   };
// };

import CategoriesApi from './CategoriesApi';
import { CategoriesData } from './CategoriesApi';

export const fetchAndStoreCategories = async () => {
  try {
    const response = await CategoriesApi.getCategoriesData();
    if (response && response.data) {
      // Lưu trữ dữ liệu vào localStorage
      localStorage.setItem('categories', JSON.stringify(response.data));
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

// Hàm lấy dữ liệu từ localStorage
export const getCategoriesFromLocalStorage = (): CategoriesData | null => {
  const storedCategories = localStorage.getItem('categories');
  return storedCategories ? JSON.parse(storedCategories) : null;
  // : (window.location.href = '/sign-in');
};
