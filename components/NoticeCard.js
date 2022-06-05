import { Icon, IconButton } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
function NoticeCard({ title, description }) {
  return (
    <>
      <div className="card">
        <IconButton
          _hover={{
            bg: "brand.primary",
          }}
          bg={"transparent"}
          icon={<FaBell size={14} color={"white"} />}
        />
        <div>
          <h3 className="cardTitle">{title}</h3>
          <p className="cardDesc">{description}</p>
        </div>
      </div>
    </>
  );
}

export default NoticeCard;
