import "./styles.css";

interface Props {
  number: number;
  title: string;
  description: string;
}

export const SocialProof = ({ number, title, description }: Props) => {
  return (
    <div className="socialProofWrapper">
      <div
        className="socialProofNumber"
        style={{
          fontVariationSettings: "'opsz' 144, 'wght' 600, 'SOFT' 0",
        }}
      >
        {number}
      </div>
      <div
        className="socialProofTitle"
        style={{
          fontVariationSettings: "'opsz' 144, 'wght' 600, 'SOFT' 0",
        }}
      >
        {title}
      </div>
      <div className="socialProofDescriptionWrapper">
        <div className="socialProofDescription">{description}</div>
      </div>
    </div>
  );
};
