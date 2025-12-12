type BannerProps = {
    imgBanner: string;
};

export default function Banner({ imgBanner, ...props }: BannerProps) {
    return (
        <div className="banner">
            <img className="bannerImg" src={imgBanner} />
        </div>
    );
}