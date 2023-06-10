import styled from '@emotion/styled';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { BsEyeFill } from 'react-icons/bs';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export const Item = styled.li`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 3px 16px 2px rgba(29, 51, 107, 0.15);
  border-radius: 16px;
`;

export const Image = styled.img`
  width: 320px;
  margin: 0 auto;
`;

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: 30px;
  margin-right: 16px;
`;

export const TimeIcon = styled(MdOutlineAccessTimeFilled)``;

export const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ViewIcon = styled(BsEyeFill)``;

export const StatsText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 2.17;
  color: #242424;
`;

export const ItemImage = styled.img`
  width: 320px;
  height: 224px;
`;

export const InfoWrapper = styled.div`
  padding: 16px;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 30px;
`;

export const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const UserName = styled.p`
  position: relative;
  font-weight: 500;
  font-size: 12px;
  line-height: 2.17;
  color: #242424;
  margin-right: 24px;

  &::after {
    content: '';
    width: 2px;
    height: 24px;
    background-color: #b1b1b1;

    position: absolute;
    top: 50%;
    right: -13px;
    transform: translateY(-50%);
  }
`;

export const UserDate = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 2.17;
  color: #242424;
`;

export const ItemTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  text-transform: capitalize;
  color: #242424;
  margin-bottom: 12px;
`;

export const ItemText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62;
  color: #242424;
`;

export const ArrowLeftIcon = styled(MdKeyboardArrowLeft)`
  position: absolute;
  top: 50%;
  left: -40px;
  transform: translateY(-50%);
  z-index: 10;
  transform: scale(1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    left: -45px;
  }
`;

export const ArrowRightIcon = styled(MdKeyboardArrowRight)`
  position: absolute;
  top: 50%;
  right: -40px;
  transform: translateY(-50%);
  z-index: 10;
  transform: scale(1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    right: -45px;
  }
`;
