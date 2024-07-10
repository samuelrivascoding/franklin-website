import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const FAQAbout = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-28 px-16 text-center text-29xl text-link-primary font-heading-desktop-h5 ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-start py-0 px-9 box-border gap-[80px] max-w-[1040px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
            FAQs
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            Find answers to commonly asked questions about the Franklin High
            school STEM Club, including membership requirements, meeting times,
            and how to get involved.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>What are the membership requirements?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To become a member of the Franklin High school STEM Club, you
                must be a student at Franklin High School and have an interest
                in STEM related interests, which include sciences such as
                biology, chemistry, physics, computer science, robotics, and
                more. There are no specific academic requirements.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>When and where do you meet?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The club will meet once on September 1st. From there, future
                meetings will be decided at a later basis.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>
                How can I get involved? Can I join if I have no coding
                experience?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To get involved with the Franklin High School STEM Club, first
                fill out a membership form. Then, simply attend one of our
                meetings. The Franklin High School STEM Club welcomes students
                of all skill levels. Whether you actively do STEM related
                extracurricular or are just window shopping for your interests,
                you'll find a supportive club here. Members get invited to
                discord for team-based competitions. Future events will be
                decided at a later basis.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>
                What if I want to apply for leadership positions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                When leadership positions are available, fill out form at top of
                page.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

FAQAbout.propTypes = {
  className: PropTypes.string,
};

export default FAQAbout;
