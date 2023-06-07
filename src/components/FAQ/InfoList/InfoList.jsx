import faq from '../../../helpers/faq.json';
import InfoItem from '../InfoItem/InfoItem';

const InfoList = () => {
  return (
    <ul>
      {faq.map(item => (
        <InfoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default InfoList;
