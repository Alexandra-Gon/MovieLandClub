import "./BlogPage.css";
// import ReactPlayer from "react-player";
import BugReportIcon from "@mui/icons-material/BugReport";
// import Video from "../../Components/Video/Video";

const BlogPage = () => {
  return (
    <div className="blogBackground">
      <div className="blogContainer">
        <h1 className="blogTitle">Blog Page</h1>

        <section id="flash" className="sectionContainer">
          <h3 className="sectionBlogTitles">
            The Flash: DC's Speedy Multiverse
          </h3>
          <img
            loading="lazy"
            className="imageBlog"
            src={require("../../images/flash1.webp")}
            alt="Flash movie image"
          />
          <p className="blogText">
            The scarlet runner finally has his movie as the protagonist. Flash ,
            the long-awaited first movie starring the popular DC character , is
            finally among us. The director Andy Muschietti repeats with Warner
            after the success of the two chapters of It to get fully into the
            multiverse of the North American publisher and offer a title full of
            action and comedy.
            <br />
            With a script by Christina Hodson , and with her sister Bárbara as
            producer, the Argentine director surrounds himself with a cast of
            stars who surround a solvent Ezra Miller who is capable of assuming
            the leadership of the work with ease. Michael Keaton, Ben Affleck,
            Maribel Verdú, Sasha Calle or Michael Shannon are some of the
            powerful names that take part in the film and that accompany Flash
            in this first great cinematographic adventure.
            <br />
            The film follows the scarlet runner, who decides to use his super
            speed powers to go back in time and try to save his mother's life.
            By playing with the space-time continuum, Flash alters the reality
            of the entire multiverse and ends up trapped in a reality where
            there are no metahumans to stand up to General Zod, who comes to
            Earth to conquer the planet in events similar to those depicted in
            Zack Snyder's Man of Steel.
            <br />
            {/* <div className="videoBlogContainer">
              <Video videoId="hebWYacbdvc" />
            </div> */}
            flash review Although it seems like an unorthodox justification, the
            truth is that the best thing that can be said about this Flash is
            that it is not the disaster that it seemed it was going to be . In
            addition to a complicated shoot, Miller's own criminal conduct, and
            several delays in its release date, the film had been accompanied by
            a halo of doom for some time and the end result was far from being
            the predicted debacle.
            <br />
            While The Flash isn't the best superhero movie ever, it's not the
            worst either; something that is already gratifying within the
            current panorama of the subgenre. Perhaps the main problem Flash
            faces is entering the field of the multiverse when we have already
            seen it in other recently released films with better results. Even
            so, Muschietti dares with an action comedy that works in a good part
            of his footage.
            <br />
            And I say action comedy because Flash is, above all, a movie loaded
            with humor. Ezra Miller complies with his part in a solvent way
            while the plot introduces comic sequences of all kinds, well
            complemented with some very enjoyable action scenes, although not
            entirely round on the technical level. According to Muschietti, the
            bad CGI is intentional, something I don't quite understand .
          </p>
        </section>

        <section id="insidius" className="sectionContainer">
          <h3 className="sectionBlogTitles">
            Insidious: The Red Door Is the new installment of the horror
            franchise worth it?
          </h3>
          <img
            loading="lazy"
            className="imageBlog"
            src={require("../../images/insidius1.webp")}
            alt="Insidius movie image"
          />
          <p className="blogText">
            Insidious , created by director James Wan (responsible for the
            Warren File universe ) and screenwriter Leigh Whannell (director of
            Upgrade and The Invisible Man ), came to refresh the horror genre
            back in 2010 at the hands of Blumhouse, with a proposal that delved
            into the world of dreams and nightmares. Unfortunately for many, the
            film ended up becoming a somewhat unsuccessful project, and it
            failed to fully exploit the potential of its premise. On this
            occasion, at SOYDECINE.COM we want to talk to you about Insidious:
            the red door, self-defined asthe latest installment in the
            franchise.
            <br />
            The first Insidious film follows the story of the Lambert family,
            who move into a new home only to find themselves haunted by ghosts
            and demonic presences. The youngest son, Dalton (Ty Simpkins), falls
            into a coma, and his parents discover that he really is in a realm
            known as "The Afterlife." With the help of a group of paranormal
            experts led by psychologist Elise Rainer (Lin Shaye), the family
            will try to rescue Dalton, having to face the terrifying demon that
            has trapped him.
            <br />
            Insidious 2 , released three years later, delves into the origins of
            the ghosts and demons that tormented the family in the first part.
            The plot is located just before the events that occurred in the
            initial tape, and continues to explore the connection of the
            Lamberts with the afterlife. These jumps back in time are repeated
            in the following installments as well: the third film is a prequel
            that takes place long before even the events that take place in its
            predecessors, just like its fourth installment, known as The Last
            Key . Another prequel starring Rainier whose story comes to tell us
            more about the past of the parapsychologist.
            <br />
            Insidious: The Red Door makes another time jump and this time, the
            chosen moment is located nine years after what happened in its
            second chapter, connecting its story directly with the first two
            films and thus returning to the history of the Lambert family. In
            addition, this fifth installment of the franchise marks the
            directorial debut of Patrick Wilson, who plays Josh, the tormented
            family man and now ex-husband of Renai (Rose Byrne). Dalton (played
            again by Ty Simpkins), the eldest of the three children, is packing
            his bags for college. The family reunites for Grandma Lorraine's
            funeral. Josh will try to connect with his son, who suffers typical
            adolescent traumas, before his departure.
            <br />
            {/* <Video videoId="ZuQuOnYnr3Q" /> */}
            And it is precisely Dalton who will assume the co-prominence of the
            story. As we explore his own subconscious through what he draws in
            his college classes, intermittently, we will be told the story of
            his father, who will try to find the answer to his mental
            disorientation. Both will end up connecting, bringing back some
            memories and old ghosts and demons from the past.
            <br />A correct debut Although we don't find Wan behind the scenes ,
            Insidious: The Red Door knows how to play the same game that other
            horror franchises have already played. That game is usually to
            return to the original movie, to the beginning, to the heart of the
            success. Despite leaving us with the feeling of not having exploited
            100% of what the film could offer, it cannot be denied that Patrick
            Wilson succeeds in a debut that doesn't even feel like one: like
            many other actors who have ended up directing, the American has a
            steady hand behind the cameras. His work as an actor has allowed him
            to observe and learn to end up offering us a new installment that
            meets his objective: to take us back to its beginnings by offering a
            story that marries quite well with the aroma of the saga.
          </p>
        </section>

        <section id="barbie" className="sectionContainer">
          <h3 className="sectionBlogTitles">
            'Barbie: The Album' sweeps Amazon with its pink vinyl
          </h3>
          <img
            loading="lazy"
            className="imageBlog"
            src={require("../../images/barbie1.webp")}
            alt="Barbie movie image"
          />
          <p className="blogText">
            Barbie Pink Vinyl : The Album has become a phenomenon on Amazon !
            This special edition vinyl has reached the coveted number 1 spot in
            the Vinyl category , wowing Barbie fans around the world.
            <br />
            “Barbie: The Album” is the official soundtrack for the highly
            anticipated “Barbie” movie, starring Margot Robbie and Ryan Gosling
            . Produced by Mark Ronson , this album is a true musical gem that
            brings together some of the biggest superstars in the industry.
            <br />
            Priced at €29.99, this pink vinyl is a real gem for music and Barbie
            lovers . In addition, an exclusive poster is included as a gift ,
            making this edition a true collector's item.
            <br />
            The dimensions of the product are 0.4 x 31.2 x 31.4 cm and it weighs
            294.84 grams.
            <br />
            Songs list The track list on "Barbie: The Album" is simply
            spectacular. It includes hits from big-name artists like Lizzo with
            “Pink,” Dua Lipa with “Dance the Night,” and Nicki Minaj & Ice Spice
            with “Barbie World” (featuring Aqua). We also find Charli XCX with
            “Speed ​​Drive”, Karol G with “Watiti” (feat. Aldo Ranks), and Tame
            Impala with “Journey to the Real World”. Ryan Gosling also shows off
            his musical talent with the track “I'm Just Ken”, while other
            artists like Dominic Fike, HAIM, The Kid LAROI, Khalid,
            PinkPantheress, Gayle and Ava Max round out this incredible
            selection of songs.
            <br />
            No wonder this vinyl is taking the Amazon sales charts by storm. It
            is currently ranked #4 in the CDs & Vinyl category, #1 in
            Soundtracks, and #3 in the Vinyl Store . Additionally, it has placed
            fourth in the Pop category. An impressive feat for this pink vinyl
            that has captured the hearts of Barbie and music fans around the
            world!
            <br />
            If you are a true fan of Barbie and a lover of music, you cannot
            miss this unique opportunity to get your hands on “ Barbie: The
            Album ” in its exclusive pink vinyl edition. Immerse yourself in the
            vibrant and exciting songs that will accompany the film, and let
            yourself be carried away by the magic of Barbie in every note.
            <br />
            With its runaway success on Amazon and irresistible appeal, this
            musical treasure is destined to become a highly prized collector's
            item. Don't miss out on yours and join Barbie on this exciting
            musical adventure!
          </p>
        </section>

        <section id="potter" className="sectionContainer">
          <h3 className="sectionBlogTitles">
            SPECIALS Which Harry Potter character are you? find out
          </h3>
          <img
            loading="lazy"
            className="imageBlog"
            src={require("../../images/harryPotter1.webp")}
            alt="Barbie movie image"
          />
          <p className="blogText">
            Personality test that will define which Harry Potter character
            represents you.
            <br />
            SPECIALSWhich Harry Potter character are you? find out Personality
            test that will define which Harry Potter character represents you.
            Posted ago 2 years in April 4, 2021by Lionel Marrero
            test-which-harry-potter-character-are-you Do you want to find out
            which Harry Potter character you are? If so, you are in the right
            place. We have developed a small Harry Potter personality test that,
            after answering a series of questions, will tell you which character
            in the franchise you would be. All ready? Well let's go there!
            <br />
            What has been your result in this Harry Potter personality test ?
            You can share it on social networks and send this quiz to your
            friends to find out which character in the saga they would be.
            <br />
            In the wizard franchise there are characters of all kinds: brave ,
            scared , competitive , dark ... From the evil Lord Voldemort to the
            witty Hermione , and each of them has their own characteristics and
            abilities. All these characters come together in a test in which,
            depending on your answers, you will be awarded one or the other.
            <br />
            Personality of the protagonists of Harry Potter How is the
            personality of the protagonists of Harry Potter? On the side of the
            heroes, they all have something in common: they seek the good for
            Hogwarts and the wizarding world. However, as we have said, each one
            has its qualities and weak points.
            <br />
            Harry Potter : The protagonist of this story is characterized by his
            courage and bravery. He started out as a true inexperienced in the
            wizarding world, as he had grown up in a Muggle family . Despite
            this, he excelled at Hogwarts, showing that he was not afraid of
            anything, and that he would do anything to protect his best friends.
            <br />
            Ron Weasley : The nice friend of our protagonist exudes tenderness
            from every pore of his skin. Although it is true that he is somewhat
            clumsy, his kindness and courage also stand out. He's somewhat
            naive, there's no denying that, but he has a heart of gold and, like
            Harry, he puts the well-being of his friends before his own.
            <br />
            Hermione Granger : And what about our dear Hermione? She stands out
            for being the real brain in the group of friends. She has a
            tremendous desire to learn, and although we could highlight her
            intelligence as her great virtue, although she has many others.
            Hermione knows how to differentiate right from wrong, and she has a
            heart that doesn't fit in her chest.
            <br />
            Of course these are not the only characters in the saga, and in this
            personality test you will find others with whom you may feel more
            identified.
          </p>
        </section>
        <div className="blogNoteContainer">
          <BugReportIcon />
          <p>
            All information on this website is fictitious and has only been
            created to apply my knowledge as a front-end web developer. If you
            want to visit the real site to read the movie reviews you can go
            through this link: https://soydecine.com/
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
