// import Frame from "../components/Frame";
import FrameWrapper from "../components/FrameWrapper";
import Group from "../components/Group";
import NavColumns from "../components/NavColumns";
import ImageSlider from "../components/ImageSlider";
import testorder from "../../../assets/icons/testorder.png";
import worldmap from "../../../assets/images/worldmap.png";
import PremiumTestimonialDemo from "../components/PremiumTestimonialDemo";
const Landing = () => {
  return (
    <div>
      {/* <Frame /> */}
      <ImageSlider />
      <div className="bg-white justify-center w-full">
        <div className="flex items-center justify-center h-[100px]">
          <p className=" font-bold text-gray-800 text-center [font-family:'Open_Sans',Helvetica] text-[40px]">
            Services
          </p>
        </div>
        <div className="bg-white overflow-hidden w-full h-[300px] flex flex-row gap-4 justify-center">
          <Group
            manage={"Manage Patient"}
            text={
              "Easily manage patient information, medical records, and contact details."
            }
            icon={"https://c.animaapp.com/JykgXKim/img/carbon-hotel.svg"}
          />
          <Group
            manage={"Manage User"}
            text={
              "Control user roles, permissions, and account access across the system."
            }
            icon={
              "https://png.pngtree.com/png-clipart/20190924/original/pngtree-management-icon-for-your-project-png-image_4852348.jpg"
            }
          />
          <Group
            manage={"Manage Test Order"}
            text={
              "Create, track, and manage laboratory test orders efficiently."
            }
            icon={testorder}
          />
        </div>
      </div>

      <div className="flex items-center justify-center h-[200px]">
        <p className=" font-bold text-gray-800 text-center [font-family:'Open_Sans',Helvetica] text-[40px]">
          Our Popular Customers
        </p>
      </div>
      <div className="relative bg-white overflow-hidden w-full h-auto flex flex-col gap-4 justify-center">
        <div
          className="absolute w-[1390px] h-[772px] left-1/4 bg-cover bg-[50%_50%]"
          style={{ backgroundImage: `url(${worldmap})` }}
        ></div>
        <div className="flex justify-around w-auto mb-10 pl-[50px] flex-col gap-[80px] ">
          <FrameWrapper
            image={
              "https://i1-dulich.vnecdn.net/2023/07/12/HL1-9875-1689130357.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=mN2YMaNq5Vgj_oi6A_s91Q"
            }
            text={""}
            national={"Quang Ninh"}
          />
          <FrameWrapper
            image={
              "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482744GTz/anh-mo-ta.png"
            }
            text={""}
            national={"Ho Chi Minh"}
          />
          <FrameWrapper
            image={
              "https://bizweb.dktcdn.net/100/242/347/files/album-anh-ve-ha-noi-01-0cbc70a3-b767-46e7-9904-d09ad5092662.jpg?v=1720771375029"
            }
            text={""}
            national={"Ha Noi"}
          />
        </div>
      </div>
      <PremiumTestimonialDemo />

      <NavColumns />
    </div>
  );
};
export default Landing;
