import { CategoriesData } from 'apis/categories/CategoriesApi';
import { getCategoriesFromLocalStorage } from 'apis/categories/CategoriesServices';

const categoriesData: CategoriesData | null = getCategoriesFromLocalStorage();

export const shortAddress = (workplaceAddress: any) => {
  if (!Array.isArray(workplaceAddress)) {
    return '';
  }
  const provincesList = workplaceAddress.filter(
    (item: any) => item.categoryType === 'P_PROVINCE_LIST'
  );

  let s = '';
  if (provincesList.length > 0) {
    s += provincesList[0].code;
  }
  if (provincesList.length > 1) {
    s = provincesList.map((item: any) => item.name).join(`, `);
    // s += ' và ' + (provincesList.length - 1) + ' nơi khác...';
  }
  return s;
};

export const useShortTitles = (item: any) => {
  const careerTitles = categoriesData?.listCareerTitles || [];
  const shortTitle = () => {
    for (const obj of careerTitles) {
      if (obj.code === item) {
        return obj;
      }
    }
  };
  return shortTitle();
};

export const useShortExp = (item: any) => {
  const experience = categoriesData?.listExperience || [];
  const shortExpObj = () => {
    for (const obj of experience) {
      if (obj.code === item) {
        return obj;
      }
    }
  };
  return shortExpObj();
};

export const useShortWorkType = (item: any) => {
  const typeOfWorks = categoriesData?.listTypeOfWorks || [];
  const shortWorkType = () => {
    for (const obj of typeOfWorks) {
      if (obj.code === item) {
        return obj;
      }
    }
  };
  return shortWorkType();
};

export const useShortWorkTime = (item: any) => {
  const workingTimes = categoriesData?.listWorkingTimes || [];
  const shortWorkTime = () => {
    for (const obj of workingTimes) {
      if (obj.code === item) {
        return obj;
      }
    }
  };
  return shortWorkTime();
};

export const shortSalary = (item: any) => {
  let s = '';
  if (item.isSalaryAgreement) {
    s += 'Lương thoả thuận';
  } else {
    const formatToMillion = (value: any) => {
      // Chia cho 1 triệu và kiểm tra nếu số có phần thập phân khác 0
      return value >= 1000000
        ? (value / 1000000).toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
          }) + ' triệu'
        : value.toLocaleString();
    };

    const salaryMinFormatted = formatToMillion(item?.salaryMin);
    const salaryMaxFormatted = formatToMillion(item?.salaryMax);

    s += `${salaryMinFormatted} - ${salaryMaxFormatted}`;
  }
  return s;
};

export const useParagraph = (htmlData: string) => {
  const strippedText = stripHtmlTags(htmlData);
  const formattedText = strippedText.replace(/<li>/g, '</li><br>');
  const paragraphs = formattedText
    .split('<br>')
    .map((paragraph, index, array) => {
      if (index !== array.length - 1) {
        return paragraph + '<br>';
      }
      return paragraph;
    });
  return paragraphs;
};

export const stripHtmlTags = (html: any) => {
  if (!html) return '';
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

export const shortDescript = (item: any) => {
  const strippedDescription = stripHtmlTags(item.descriptionRecruitment);
  let s = '';
  if (strippedDescription.length < 450) {
    s = strippedDescription;
  } else {
    s = `${strippedDescription.slice(0, 450)}...`;
  }
  return s;
};
