import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const FAQScholarships = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-28 px-16 gap-[80px] text-center text-29xl text-link-primary font-heading-desktop-h5 ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-start gap-[24px] max-w-[776px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
          FAQs
        </h1>
        <div className="self-stretch relative text-lg leading-[150%]">
          Find answers to commonly asked questions about the scholarship
          application process and eligibility.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-start gap-[64px]">
          <Accordion className="self-stretch w-[624px]" sx={{ width: 624 }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>How to apply?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To apply for the scholarship, you need to fill out the initial
                online application form. Applicants will be contacted when they
                are seniors to then submit another application for proof of
                extracurriculars done over 4 years
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch w-[624px]" sx={{ width: 624 }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>Who is eligible?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{`Our scholarships are available to current Franklin High School freshmen in the class of 2028
`}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[64px]">
          <Accordion className="self-stretch w-[624px]" sx={{ width: 624 }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>What is the deadline?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The deadline to submit your scholarship application is June 5th
                on 2025 for the initial application. The final deadline for the
                scholarship will be on June 5th, 2028, where we will provide
                final form to submit.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch w-[624px]" sx={{ width: 624 }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>How are winners selected?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Winners are selected based on proof of extracurricular
                activities that are related to STEM.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[64px]">
          <Accordion className="self-stretch w-[624px]" sx={{ width: 624 }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>Who is funding this scholarship?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donations from businesses and people will go towards
                scholarship.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch w-[624px]" sx={{ width: 624 }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>
                What happens if there are multiple people eligible at the end of
                the four years?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If there are multiple people eligible at the end of the four
                years, then the scholarship will be split up equally among the
                people eligible up to 3 people. If there are more than 3 people
                eligible, then the 3 most qualified people will be chosen based
                on merit and strength of STEM extracurriculars.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[64px]">
          <Accordion className="self-stretch w-[624px]" sx={{ width: 624 }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>How much is the scholarship?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The scholarship will be, at least, 500$. Additional funding may
                increase the scholarship.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch w-[624px]" sx={{ width: 624 }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>
                When will I be notified if I am awarded the scholarship?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Scholarship recipients will be notified by phone number or email
                during the 2028 year.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[64px]">
          <Accordion className="self-stretch w-[624px]" sx={{ width: 624 }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>
                What is proof of my extracurricular activities?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{`Participating in ANY competition displayed on the competition page is sufficient proof.

However, there must be EVIDENCE of participation and effort, such as pictures or written letters.`}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch w-[624px]" sx={{ width: 624 }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>
                Where is the money going? How do I know for sure that my money
                will go to the scholarship?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We will ask a scholarship committee to manage the money,
                ensuring that the money will go to scholarship
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

FAQScholarships.propTypes = {
  className: PropTypes.string,
};

export default FAQScholarships;
