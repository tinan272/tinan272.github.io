import GitHubIcon from "@mui/icons-material/GitHub";
import Google from "@mui/icons-material/Google";
import Movie from "@mui/icons-material/Movie";
import Article from "@mui/icons-material/Article";

export default function WorkHeader({ title, links }) {
    const iconMap = {
        Article: <Article />,
        Google: <Google />,
        GitHub: <GitHubIcon />,
        Movie: <Movie />,
    };

    const iconType = {
        Article: "Doc",
        Google: "Doc",
        GitHub: "Github",
        Movie: "Movie",
    };

    return (
        <div className="my-4">
            <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl">
                {title}
            </p>
            <div className="flex justify-center items-center gap-10 mt-5">
                {Object.entries(links).map(([linkType, url]) => (
                    <a
                        key={linkType}
                        href={url}
                        className="text-base"
                        target="_blank"
                    >
                        {iconMap[linkType]}{" "}
                        <p className="sm:text-sm md:text-md lg:text-base">
                            {iconType[linkType]} Link
                        </p>
                    </a>
                ))}
            </div>
        </div>
    );
}
