import { Typography } from 'antd';
import {
  AwardIcon,
  CreativeIcon,
  GiftCoinIcon,
  HeartOnHandIcon,
  HonorGroupIcon,
  MedicalShieldIcon,
} from 'assets/svg';
import BlockDepartCard from 'components/BlockDepartCard';
import React from 'react';

const OverviewBlock: React.FC = () => {
  return (
    <>
      <div className="flex block-container max-w-screen-xl mx-auto md:pt-10 2xl:px-6 lg:px-14 md:px-16">
        <div className="block-item">
          <BlockDepartCard
            svgComponent={<HeartOnHandIcon />}
            title="SỨ MỆNH Ý NGHĨA"
            type="mission"
            description="Bạn sẽ không chỉ là một nhân viên, mà còn là một người đóng góp vào việc cải thiện sức khỏe cộng đồng. Mỗi bước đi của bạn đều góp phần vào sứ mệnh chăm sóc sức khỏe cho cả Việt Nam."
          />
        </div>
        <div className="block-item">
          <BlockDepartCard
            svgComponent={<AwardIcon />}
            title="SẢN PHẨM CHẤT LƯỢNG CAO,<br />THƯƠNG HIỆU UY TÍN"
            type="mission"
            description="Với sản phẩm được nhập khẩu từ Mỹ, thương hiệu ECOGREEN là niềm tin lâu dài của người tiêu dùng. Đối với nhân viên bán hàng, điều này mang lại lợi thế vô song khi tiếp cận khách hàng và đạt được thành công trong bán hàng."
          />
        </div>
        <div className="block-item">
          <BlockDepartCard
            svgComponent={<CreativeIcon />}
            title="MÔI TRƯỜNG LÀM VIỆC<br />NĂNG ĐỘNG, SÁNG TẠO"
            type="mission"
            description="Tại ECO Pharma, chúng tôi tạo ra một môi trường làm việc năng động, nơi mà sự sáng tạo được đánh giá cao. Bạn sẽ gặp nhiều cơ hội thăng tiến, được đào tạo và phát triển nghề nghiệp của mình."
          />
        </div>
        <div className="block-item">
          <BlockDepartCard
            svgComponent={<GiftCoinIcon />}
            title="LƯƠNG THƯỞNG CAO NHẤT<br />TRONG NGÀNH DƯỢC"
            type="mission"
            description="Chúng tôi cam kết đảm bảo rằng công sức và đóng góp của bạn được công nhận đúng mức. Với mức lương thưởng cao nhất trong ngành dược hiện nay, ECO Pharma không chỉ là nơi bạn làm việc, mà là nơi bạn xây dựng sự nghiệp."
          />
        </div>
        <div className="block-item">
          <BlockDepartCard
            svgComponent={<HonorGroupIcon />}
            title="CHÍNH SÁCH PHÚC LỢI ĐA DẠNG"
            type="mission"
            description="ECO Pharma mang đến cho bạn các chính sách phúc lợi đa dạng và ưu đãi đặc biệt. Không chỉ riêng bạn, gia đình bạn cũng được hưởng ưu đãi khi sử dụng sản phẩm/dịch vụ trong Hệ sinh thái của ECO - điều mà không nhiều nơi làm việc khác có được!"
          />
        </div>
        <div className="block-item">
          <BlockDepartCard
            svgComponent={<MedicalShieldIcon />}
            title="TỰ HÀO LÀ THÀNH VIÊN CỦA<br /> HỆ SINH THÁI CHĂM SÓC SỨC KHỎE"
            type="mission"
            description="ECO Pharma không chỉ là một công ty, mà là một thành viên quan trọng trong hệ sinh thái chăm sóc sức khỏe lớn nhất Việt Nam. Điều này mang lại cho bạn sự tự hào và nhận thức về việc bạn là một phần của một tập đoàn đang dẫn đầu ngành."
          />
        </div>
      </div>

      {/* <div className="block sm:hidden lg:hidden px-4">
        <div className="flex flex-col pb-5">
          <img
            src="https://s3-api.e-plus.vn/portal/20240708/202407081511007/sumenh_ynghia_image.jpg"
            alt="sumenh_ynghia_image"
            className="rounded-lg w-full max-h-56 object-cover"
          />
          <Typography.Text className="font-semibold text-lg text-blue-700 py-2">
            Sứ mệnh & Ý nghĩa
          </Typography.Text>
          <Typography.Text className="text-sm text-gray-700 text-justify">
            Bạn sẽ không chỉ là một nhân viên, mà còn là một người đóng góp vào
            việc cải thiện sức khỏe cộng đồng. Mỗi bước đi của bạn đều góp phần
            vào sứ mệnh chăm sóc sức khỏe cho cả Việt Nam.
          </Typography.Text>
        </div>

        <div className="flex flex-col pb-5">
          <img
            src="https://s3-api.e-plus.vn/portal/20240708/202407081530058/sanpham_chatluong_image.jpg"
            alt="sanpham_chatluong_image"
            className="rounded-lg w-full max-h-56 object-cover"
          />
          <Typography.Text className="font-semibold text-lg text-blue-700 py-2">
            Sản phẩm chất lượng cao, thương hiệu uy tín
          </Typography.Text>
          <Typography.Text className="text-sm text-gray-700 text-justify">
            Với sản phẩm được nhập khẩu từ Mỹ, thương hiệu ECOGREEN là niềm tin
            lâu dài của người tiêu dùng. Đối với nhân viên bán hàng, điều này
            mang lại lợi thế vô song khi tiếp cận khách hàng và đạt được thành
            công trong bán hàng.
          </Typography.Text>
        </div>

        <div className="flex flex-col pb-5">
          <img
            src="https://s3-api.e-plus.vn/portal/20240708/202407081534000/moitruong_lamviec_image.jpg"
            alt="moitruong_lamviec_image"
            className="rounded-lg w-full max-h-56 object-cover"
          />
          <Typography.Text className="font-semibold text-lg text-blue-700 py-2">
            Môi trường làm việc năng động, sáng tạo
          </Typography.Text>
          <Typography.Text className="text-sm text-gray-700 text-justify">
            Tại ECO Pharma, chúng tôi tạo ra một môi trường làm việc năng động,
            nơi mà sự sáng tạo được đánh giá cao. Bạn sẽ gặp nhiều cơ hội thăng
            tiến, được đào tạo và phát triển nghề nghiệp của mình.
          </Typography.Text>
        </div>

        <div className="flex flex-col pb-5">
          <img
            src="https://s3-api.e-plus.vn/portal/20240708/202407081535049/luongthuong_caonhat_image.png"
            alt="luongthuong_caonhat_image"
            className="rounded-lg w-full max-h-56 object-cover"
          />
          <Typography.Text className="font-semibold text-lg text-blue-700 py-2">
            Lương thưởng cao nhất trong ngành dược
          </Typography.Text>
          <Typography.Text className="text-sm text-gray-700 text-justify">
            Chúng tôi cam kết đảm bảo rằng công sức và đóng góp của bạn được
            công nhận đúng mức. Với mức lương thưởng cao nhất trong ngành dược
            hiện nay, ECO không chỉ là nơi bạn làm việc, mà là nơi bạn xây dựng
            sự nghiệp.
          </Typography.Text>
        </div>

        <div className="flex flex-col pb-5">
          <img
            src="https://s3-api.e-plus.vn/portal/20240708/202407081537000/phucloi_dadang_image.png"
            alt="phucloi_dadang_image"
            className="rounded-lg w-full max-h-56 object-cover"
          />
          <Typography.Text className="font-semibold text-lg text-blue-700 py-2">
            Chính sách phúc lợi đa dạng
          </Typography.Text>
          <Typography.Text className="text-sm text-gray-700 text-justify">
            ECO Pharma mang đến cho bạn các chính sách phúc lợi đa dạng và ưu
            đãi đặc biệt. Không chỉ riêng bạn, gia đình bạn cũng được hưởng ưu
            đãi khi sử dụng sản phẩm/dịch vụ trong Hệ sinh thái của ECO - điều
            mà không nhiều nơi làm việc khác có được!
          </Typography.Text>
        </div>

        <div className="flex flex-col pb-5">
          <img
            src="https://s3-api.e-plus.vn/portal/20240708/202407081539010/nhathuoc_eco_image.jpg"
            alt="nhathuoc_eco_image"
            className="rounded-lg w-full max-h-56 object-cover"
          />
          <Typography.Text className="font-semibold text-lg text-blue-700 py-2">
            Tự hào là thành viên của hệ sinh thái y dược lớn
          </Typography.Text>
          <Typography.Text className="text-sm text-gray-700 text-justify">
            ECO Pharma không chỉ là một công ty, mà là một thành viên quan trọng
            trong hệ sinh thái chăm sóc sức khỏe lớn nhất Việt Nam. Điều này
            mang lại cho bạn sự tự hào và nhận thức về việc bạn là một phần của
            một tập đoàn đang dẫn đầu ngành.
          </Typography.Text>
        </div>

        <div className="rounded-xl w-full h-full p-2 pg-28388D text-justify">
          <div className="p-4">
            <Typography.Text className="text-base font-semibold text-white">
              Tại ECO, chúng tôi không chỉ cung cấp công việc, mà còn mang đến
              cho bạn một cơ hội để đóng góp vào một mục tiêu cao cả - chăm sóc
              sức khỏe cho cộng đồng. Hãy cùng nhau xây dựng một tương lai sáng
              tạo và ý nghĩa tại ECO!
            </Typography.Text>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default OverviewBlock;
