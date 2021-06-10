class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  greet = () => {
    
    const message = this.createChatBotMessage("Hello friend. ");
    this.addMessageToState(message);
  };
  handlecounselling = () => {
    const message1=this.createClientMessage("Counselling");
    const message = this.createChatBotMessage("Do you want to know about :", {
      widget: "Counselling",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  handleapplication = () => {
    const message1=this.createClientMessage("Application")
    const message = this.createChatBotMessage("Do you want to know about :", {
      widget: "applicationQues",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  srmjee = () => {
    const message1 = this.createClientMessage("SRMJEE");
    const message = this.createChatBotMessage("Do you want to know about :", {
      widget: "srmjee",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  handleeligibility = () => {
    const message1 = this.createClientMessage("Eligibility");
    const message = this.createChatBotMessage("Do you want to know about :", {
      widget: "eligibility",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  tutionfeesmessage = () => {
    const message1=this.createClientMessage("Tuition Fees");
    const message = this.createChatBotMessage(
      "FEES STRUCTURE UG Programs KTR\n\nBio-Engineering -2.5 lakhs\nNanotechnology-3.75 lakhs\nCivil Engineering -2.5lakhs\nComputer Science Engineering- 2.5-3.5 lakhs\n Electrical and Electronics Engineering - 2.5 lakhs\nAerospace Engineering - 3.75 lakhs\nMechanical Engineering - 2.5 lakhs\nArchitechture - 2.75 lakhs\nInterior Designing-1.5 lakhs  ",
      {
        widget: "tutionfees",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  transportfeesmessage = () => {
    const message1=this.createClientMessage("Transport Fees");
    const message = this.createChatBotMessage(
      "Air conditioned college buses will be operated from limited parts of Chennai city.\nOnline Bus Booking Mode is also available (Except First Year)\nBus Fee Rs. 50,000/- Demand Draft in favour of SRMIST payable at Chennai\nThe fees will be accepted subject to the availability of seats.\nBus fees once paid will not be refunded / adjusted under any circumstances.",
      {
        widget: "transportfees",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  hostelfeesmessage = () => {
    const message1=this.createClientMessage("Hostel Fees");
    const message = this.createChatBotMessage(
      "Boy's Hostel AC 2,18,000-2,28,000\n Boy's Hostel Non-AC 92,000-1,33,000\n Girl's Hostel AC 2,13,000-2,38,000\n Girl's Hostel Non-AC  1,02,500-1,43,000",
      {
        widget: "hostelfees",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  // hostelfeesmessage = () => {
  //   const message = this.createChatBotMessage(
  //     "FEE STRUCTURE GIRL'S HOSTEL\n1.) AC-with attached Washroom 2 Sharing (Sister Nivedita (M) Block) - 2,38,000\n2.) AC-with attached Washroom 2 & 3 Sharing (Kalpana Chawla) - 2,13,000\n3.) Non AC-with attached Washroom 2 Sharing (Sister Nivedita (M) Block) - 1,43,000\n4.) Non AC – with attached Washroom 3 Sharing (Meenakshi) - 1,14,500\n5.) Non AC – with common Washroom 6 Sharing (Senbagam) - 1,02,500\n\nLAUNDRY FEES\n1.) Rs.6000/- for BOYS is Optional\n2.) Rs.7000/- for GIRLS is Optional.\n\nFor any queries related to Hostels and Hostel Bookings, please contact\nEmail ID: hostel.helpdesk.ktr@srmist.edu.in",
  //     {
  //       widget: "hostelfees",
  //     }
  //   );
  //   this.addMessageToState(message);
  // }
  //&&&&&&&&&&&&&&____________ELIGIBILITY______________________&&&&&&&&&&&&&
  el1 = () => {
    const message1=this.createClientMessage("What is the eligibility criteria for B.Tech Programs?");
    const message = this.createChatBotMessage(
      "Nationality and Age:\nResident Indian or Non-Resident Indian (NRI), holder of PIO or OCI card issued by Government of India are eligible to apply for SRMJEEE (UG).Minimum 50% aggregate in PCM"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  el2 = () => {
    const message1=this.createClientMessage("What is the eligibility criteria for B.Arch ?");
    const message = this.createChatBotMessage(
      "Candidates with Biology, Physics, Chemistry are eligible for admission to B.Tech in Biotechnology, Biomedical engineering and Genetic Engineering."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  el3 = () => {
    const message1=this.createClientMessage("What is the eligibility criteria for Bio-Engineering Programs?");
    const message = this.createChatBotMessage(
      "Not possible, because our regulations do not have provision for such a migration"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  el4 = () => {
    const message1=this.createClientMessage("What is the eligibility criteria for B.Des?");
    const message = this.createChatBotMessage(
      "Eligible, provided you are a student of Accredited Institution of NIOS."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  el5 = () => {
    const message1=this.createClientMessage("What are the courses in B.Tech for which a student with PCB is eligible?");
    const message = this.createChatBotMessage(
      " A pass in 10+2 examination with at least 50% aggregate marks in Physics, Chemistry & Mathematics and also at least 50% marks in aggregate of the 10+2 level examination or passed 10+3 Diploma Examination with Mathematics as compulsory subject with at least 50% marks in aggregate."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  el6 = () => {
    const message1=this.createClientMessage("My ward is currently doing his B.Tech 1st year in other University. can I join him in SRM from 2nd year?");
    const message = this.createChatBotMessage(
      "Nationality and Age:\nResident Indian or Non-Resident Indian (NRI), holder of PIO or OCI card issued by Government of India are eligible to apply for SRMJEEE (UG).Minimum 50% aggregate in PCM / PMB/PCB."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  el7 = () => {
    const message1=this.createClientMessage("I Am studying HSC through NIOS, Am I eligible?");
    const message = this.createChatBotMessage(
      "A Pass in 10+2 (Higher Secondary) examination or any other equivalent examination of any authority recognized by SRMIST with a minimum of 50% aggregate/percentage of marks. Criteria 1: UCEED Score + (Written Exam + Personal Interview) at SRMIST Criteria 2: Written Exam + Personal Interview at SRMIST"
    );
    this.addMessageToState(message);
  };
  //&&&&&&&&&&&&&&____________ELIGIBILITY______________________&&&&&&&&&&&&&
  hostelQues1 = () => {
    const message1=this.createClientMessage("What room furnishings are provided by the hostel?");
    const message = this.createChatBotMessage(
      "The rooms come equipped with a table, chair, cot and a cupboard for each student. All the rooms are triple sharing with 2 fans and sufficient sockets. A big sized mirror is provided in each room."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  hostelQues2 = () => {
    const message1=this.createClientMessage("What necessary items must students bring to the hostel?");
    const message = this.createChatBotMessage(
      "The bed and bathroom accessories, such as mattresses, pillows, bed covers, buckets, mugs etc., need to be purchased by the students. The students can purchase the same at the University shops within the campus."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  hostelQues3 = () => {
    const message1=this.createClientMessage("What are the facilities available for the students in the hostel");
    const message = this.createChatBotMessage(
      "Each hostel block has a R.O. Plant and Solar Heater. Hence pure drinking water and hot water for bath are available. The hostels are Wi-Fi enabled."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  hostelQues4 = () => {
    const message1=this.createClientMessage("What are the recreational facilities available in the hostel?");
    const message = this.createChatBotMessage(
      "There are separate ‘Gymnasiums’ for Boys hostel and Girls hostel. In addition to the above, sports materials such as Cricket Bats, Shuttlecocks, Throw balls, Volley balls and Indoor games are available in each block. Movies are arranged periodically at the common area of the hostels (or) University open auditorium. Student activity centre and incubation centers are available in the University Complex."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  hostelQues5 = () => {
    const message1=this.createClientMessage("What are the Hostel Mess facilities?");
    const message = this.createChatBotMessage(
      "The Hostel Mess is run by the management. Menu will be displayed on the notice board. Changes to the menu can be made through the Mess Committee. In addition to the Mess service, Canteens and Food courts are also available for students’ use."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  hostelQues6 = () => {
    const message1=this.createClientMessage("Is there a laundry Service available in the hostel?");
    const message = this.createChatBotMessage(
      "SRM Hostel provides laundry and dry cleaning service to the hostellers. Equipped with state-of-the art machinery, every kind of cloth and fabric can be serviced."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  appli1 = () => {
    const message1=this.createClientMessage("When will be the applicaiton form be issued & how to enter data?");
    
    const message = this.createChatBotMessage(
      "It is already released Candidates can apply online with e-payment or DD payment.You must ensure correctness of data before final submission. In case of any error, from your dashboard and submit the details of the corrections to be done. We shall effect the corrections and inform the same."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  appli2 = () => {
    const message1=this.createClientMessage("What are the fee structure for admission in various programs and for lateral entry?");
    const message = this.createChatBotMessage(
      "The fee structure is available in our web portal. Click here for details http://www.srmist.edu.in/admission-india/fee-details/engineering_and_technologyFees structure is same as for the first year B.Tech students . Admission will be offered depending on the availability of seats. Interested candidates can contact us"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  appli3 = () => {
    const message1=this.createClientMessage("What are the required documents for SRMJEEE?");
    const message = this.createChatBotMessage(
      "If you possess a valid admit card with photograph issued by us, there is no need for any other ID proof."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  appli4 = () => {
    const message1=this.createClientMessage("Are jee and other govt exam marks considered in SRM?");
    this.addMessageToState(message1);
    const message = this.createChatBotMessage(
      "Top 1000 rankers in IIT JEE, Top rankers in Board Examinations and districts toppers in Tamil Nadu state are recommended to approach Directorate of Admission with valid proof"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  appli5 = () => {
    const message1=this.createClientMessage("Can an NRI candidate apply for entrance examination?");
    this.addMessageToState(message1);
    const message = this.createChatBotMessage(
      "Yes. You can apply and appear for Entrance Examination."
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  Coun1 = () => {
    const message1=this.createClientMessage("What is the Duration of Counselling and Facility to stay in Campus?");
    this.addMessageToState(message1);
    const message = this.createChatBotMessage(
      "  Counseling may take about 6 hours and we don't have any facility. You have to make your own arrangement."
    );
    this.addMessageToState(message);
  };
  Coun2 = () => {
    const message1=this.createClientMessage("Can the date be rescheduled and Should we deposit the original certificates?");
    this.addMessageToState(message1);
    const message = this.createChatBotMessage(
      "Counseling date can't be rescheduled. No need to deposit, but you have to produce all original certificates for scrutiny by the University."
    );
    this.addMessageToState(message);
  };
  Coun5 = () => {
    const message1=this.createClientMessage("Does SRM arrange for educational loans? For more information:");
    this.addMessageToState(message1);
    const message = this.createChatBotMessage(
      "SRM  plays the role of a facilitator in this aspect. Number of banks will be available in the counseling venue to process loan application and issue on the- spot in -principle sanctioning letter."
    );
    this.addMessageToState(message);
  };
  Coun3 = () => {
    const message1=this.createClientMessage("Can counselling fees be paid in cash and is it refundable?");
    this.addMessageToState(message1);
    const message = this.createChatBotMessage(
      "All the fees have to be paid online or by DD. Please see the information under refund published in our web portal."
    );
    this.addMessageToState(message);
  };
  Coun4 = () => {
    const message1=this.createClientMessage("Should parents come along with candidates?");
    this.addMessageToState(message1);
    const message = this.createChatBotMessage(
      " It is not compulsory. But, the presence of candidate is mandatory."
    );
    this.addMessageToState(message);
  };
  blankmessage = () => {
    const message = this.createChatBotMessage("Please type something");
    this.addMessageToState(message);
  };
  elsemessage = () => {
    const message = this.createChatBotMessage("Could you eleborate on that ?");
    this.addMessageToState(message);
  };
  //%%%%%%%%%%%%%%%_____BIOTECHNOLOGY________________%%%%%%%%%%%
  bio = () => {
    const message1=this.createClientMessage("School Of Bio-Engineering")
    const message = this.createChatBotMessage("School Of Bio-Engineering:", {
      widget: "bio",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  bio1 = () => {
    const message1=this.v=this.createClientMessage("Biomedical Engineering (BME)")
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR- 120\n RMP- 60\n VDP- 0 NCR- 0\n AMR-0\n HYN-60\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  bio2 = () => {
    const message1=this.v=this.createClientMessage("Biotechnology")
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-240\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  bio3 = () => {
    const message1=this.v=this.createClientMessage("Biomedical W/S in Genetic Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  bio4 = () => {
    const message1=this.v=this.createClientMessage("Biomedical W/S in Regenerative Medicine");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-60\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  bio5 = () => {
    const message1=this.v=this.createClientMessage("Biomedical with specialization in Cancer Genetics");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-30\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  bio6 = () => {
    const message1=this.v=this.createClientMessage("Chemical Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-90\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  //%%%%%%%%%%%%%%%_____BIOTECHNOLOGY________________%%%%%%%%%%%

  //%%%%%%%%%%%%%%%_____ARCHITECHTURE________________%%%%%%%%%%%
  arch = () => {
    const message1=this.createClientMessage("School Of Architechture & Interior Design")
    const message = this.createChatBotMessage(
      "School Of Architechture & Interior Design:",
      {
        widget: "arch",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  arc1 = () => {
    const message1=this.createClientMessage("B.Arch-Architecture");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-80\n RMP-80\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  arc2 = () => {
    const message1=this.createClientMessage("B.Des-Interior Design");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-60\n RMP-60\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  //%%%%%%%%%%%%%%%_____ARCHITECHTURE________________%%%%%%%%%%%

  //%%%%%%%%%%%%%%%_____COMPUTING________________%%%%%%%%%%%
  comp = () => {
    const message1=this.createClientMessage("School Of Computing");
    const message = this.createChatBotMessage("School Of Computing:", {
      widget: "cse",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  comp1 = () => {
    const message1=this.createClientMessage("Artificial Intelligence");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp2 = () => {
    const message1=this.createClientMessage("Computer Science and Business Systems(in partnership with TCS");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-60\n VDP-60\n NCR-30\n AMR-0\n HYN-60\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp3 = () => {
    const message1=this.createClientMessage("Computer Science and Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-780\n RMP-600\n VDP-120\n NCR-420\n AMR-240\n HYN-120\n SKM-60"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp4 = () => {
    const message1=this.createClientMessage("CSE and Big Data Analytics");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-180\n RMP-120\n VDP-60\n NCR-60\n AMR-90\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp5 = () => {
    const message1=this.createClientMessage("CSE W/S in Artificial Intelligence and Machine Learning");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-180\n RMP-180\n VDP-60\n NCR-120\n AMR-120\n HYN-0\n SKM-60"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp6 = () => {
    const message1=this.createClientMessage("CSE W/S in Data Science & Artificial Intelligence(in association with IBM");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-150\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp7 = () => {
    const message1=this.createClientMessage("CSE W/S in Blockchain Technology");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp8 = () => {
    const message1=this.createClientMessage("CSE W/S in Blockchain&IoT(in association with IBM)");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-60\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp9 = () => {
    const message1=this.createClientMessage("CSE W/S in Cloud Computing");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-0\n VDP-0\n NCR-60\n AMR-30\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp10 = () => {
    const message1=this.createClientMessage("CSE W/S in Cloud Engineering and DevOps Automation(in association with Xebia)");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-60\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp11 = () => {
    const message1=this.createClientMessage("CSE W/S in Computer Networking");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp12 = () => {
    const message1=this.createClientMessage("CSE W/S in Cyber Security");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-180\n RMP-120\n VDP-0\n NCR-60\n AMR-90\n HYN-0\n SKM-60"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp13 = () => {
    const message1=this.createClientMessage("CSE W/S in Gaming Technology");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-60\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp14 = () => {
    const message1=this.createClientMessage("CSE W/S in Internet of things");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-60\n RMP-60\n VDP-0\n NCR-0\n AMR-30\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp15 = () => {
    const message1=this.createClientMessage("CSE with software Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp16 = () => {
    const message1=this.createClientMessage("CSE W/S in Cloud and Mobile Based Applications (in association with IBM)");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-60\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp17 = () => {
    const message1=this.createClientMessage("CSE W/S in Information Technology");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp18 = () => {
    const message1=this.createClientMessage("CSE with specilization in Financial Technologies");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-60\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  comp19 = () => {
    const message1=this.createClientMessage("Information Techonology");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-180\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  //%%%%%%%%%%%%%%%_____COMPUTING________________%%%%%%%%%%%

  //%%%%%%%%%%%%%%%_____MECHANICAL________________%%%%%%%%%%%
  mech = () => {
    const message1=this.createClientMessage("School Of Mechanical-Engineering");
    const message = this.createChatBotMessage(
      "School Of Mechanical-Engineering:",
      {
        widget: "mech",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  mech1 = () => {
    const message1=this.createClientMessage("Aerospace Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech2 = () => {
    const message1=this.createClientMessage("Automobile Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-0\n VDP-0\n NCR-30\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech3 = () => {
    const message1=this.createClientMessage("Automobile Engineering w/s in Vehicle Testing");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-30\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech4 = () => {
    const message1=this.createClientMessage("Automobile with specialisation in Automation Electronics");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-60\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech5 = () => {
    const message1=this.createClientMessage("Mechanical Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-540\n RMP-120\n VDP-12\n NCR-60\n AMR-20\n HYN-60\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech6 = () => {
    const message1=this.createClientMessage("Mechanical and Automation Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-60\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech7 = () => {
    const message1=this.createClientMessage("Mechanical Engineering w/s in Artificial Intelligence and Machine Learning");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-12\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech8 = () => {
    const message1=this.createClientMessage("Mechanical Engineering with specialisation in Robotics/Mechtronics");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-10\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech9 = () => {
    const message1=this.createClientMessage("Mechanical Engineering w/s Additive Manufacturing");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-10\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech10 = () => {
    const message1=this.createClientMessage("Mechanical Engineering w/s Advanced Materials");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-10\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech11 = () => {
    const message1=this.createClientMessage("Mechanical Engineering w/s Automative Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-10\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech12 = () => {
    const message1=this.createClientMessage("Mechatronics Engineer");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech13 = () => {
    const message1=this.createClientMessage("Mechatronics Engineering with specialisation in Robotics");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  //%%%%%%%%%%%%%%%_____MECHANICAL________________%%%%%%%%%%%

  //%%%%%%%%%%%%%%%_____CHEMICAL________________%%%%%%%%%%%
  chem = () => {
    const message1= this.createClientMessage("School Of Chemical & Material Engineering");
    const message = this.createChatBotMessage(
      "School Of Chemical & Material Engineering:",
      {
        widget: "chem",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  chem1 = () => {
    const message1=this.createClientMessage("Nanotechnology");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-30\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  //%%%%%%%%%%%%%%%_____CHEMICAL________________%%%%%%%%%%%

  //%%%%%%%%%%%%%%%_____CIVIL________________%%%%%%%%%%%
  civil = () => {
    const message1=this.createClientMessage("School Of Civil Engineering");
    const message = this.createChatBotMessage("School Of Civil Engineering:", {
      widget: "civil",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  civil1 = () => {
    const message1=this.createClientMessage("Civil Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-180\n RMP-120\n VDP-0\n NCR-30\n AMR-30\n HYN-60\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  civil2 = () => {
    const message1=this.createClientMessage("Civil Engineering with Computer Application");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-60\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  civil3 = () => {
    const message1=this.createClientMessage("Civil Engineering w/s Structural Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-10\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  civil4 = () => {
    const message1=this.createClientMessage("Civil Engineering w/s Geotechnical Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-10\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  civil5 = () => {
    const message1=this.createClientMessage("Civil Engineering w/s Transportation Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-10\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  civil6 = () => {
    const message1=this.createClientMessage("Civil Engineering w/s Water Resources and Environmental Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-GREEN\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  //%%%%%%%%%%%%%%%_____CIVIL________________%%%%%%%%%%%

  //%%%%%%%%%%%%%%%_____ELECTRICAL & ELECTRONICS________________%%%%%%%%%%%
  eee = () => {
    const message1=this.createClientMessage("School Of Electrical & Electronics Engineering");
    const message = this.createChatBotMessage(
      "School Of Electrical & Electronics Engineering:",
      {
        widget: "eee",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee1 = () => {
    const message1=this.createClientMessage("Electrical and Electronics Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-240\n RMP-60\n VDP-0\n NCR-60\n AMR-30\n HYN-60\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee2 = () => {
    const message1=this.createClientMessage("Electrical and Electronics Engineering w/s E-Mobility");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-10\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee3 = () => {
    const message1=this.createClientMessage("Electrical and Electronics Engineering w/s Smart Grid");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-10\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee4 = () => {
    const message1=this.createClientMessage("Electrical and Electronics Engineering w/s Energy Efficient Systems");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-10\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee5 = () => {
    const message1=this.createClientMessage("Electrical and Computer Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-60\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee6 = () => {
    const message1=this.createClientMessage("Electronics and Communication Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-660\n RMP-240\n VDP-60\n NCR-120\n AMR-120\n HYN-60\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee7 = () => {
    const message1=this.createClientMessage("Electronics and Computer Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-120\n RMP-60\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee8 = () => {
    const message1=this.createClientMessage("ECE W/S in Cyber Physical Systems");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-60\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee9 = () => {
    const message1=this.createClientMessage("ECE W/S Data Science");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-60\n RMP-0\n VDP-60\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee10 = () => {
    const message1=this.createClientMessage("Electrical and Communication Engineering w/s VLSI & Embedded Systems");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-40\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee11 = () => {
    const message1=this.createClientMessage("Electrical and Communication Engineering w/s Advanced Communication Systems");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-40\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee12 = () => {
    const message1=this.createClientMessage("Electrical and Communication Engineering w/s Signal/Image Processing using AI");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-0\n RMP-0\n VDP-0\n NCR-0\n AMR-40\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee13 = () => {
    const message1=this.createClientMessage("Electrical and Instrumentation Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n KTR-60\n RMP-0\n VDP-0\n NCR-0\n AMR-0\n HYN-0\n SKM-0"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  //%%%%%%%%%%%%%%%_____ELECTRICAL & ELECTRONICS________________%%%%%%%%%%%
  syllabus = () => {
    const message1=this.createClientMessage("Syllabus");
    this.addMessageToState(message1);
    window.open(
      "https://webstor.srmist.edu.in/web_assets/downloads/2021/syllabus-for-srmjee-2021.pdf"
    );
  };
  test = () => {
    const message1=this.createClientMessage("Test Cities");
    this.addMessageToState(message1);
    window.open(
      "https://webstor.srmist.edu.in/web_assets/downloads/2021/test-cities-srmjeee-srmjeeh-2021.pdf"
    );
  };
  dates = () => {
    const message1=this.createClientMessage("Important Dates");
    this.addMessageToState(message1);
    window.open(
      "https://www.srmist.edu.in/admission-india/engineering/important-dates"
    );
  };
  contact = () => {
    const message = this.createClientMessage("Contact Us");
    this.addMessageToState(message);
    window.open("https://www.srmist.edu.in/contact-us");
  };
  loan = () => {
    const message = this.createClientMessage("Loans");
    window.open(
      "https://www.srmist.edu.in/admission-india/engineering/fees/loans"
    );
    this.addMessageToState(message);
  };
  tutionfees = () => {
    window.open(
      "https://www.srmist.edu.in/admission-india/engineering/fees/tuition-fee#0"
    );
  };
  hostelfees = () => {
    
    window.open(
      "https://www.srmist.edu.in/hostel-fee-structure-academic-year-2020-21-first-year-students-boys-girls"
    );
  };
  transportfees = () => {
    const message = this.createClientMessage("Transport Fees");
    this.addMessageToState(message);
    window.open(
      "https://www.srmist.edu.in/admission-india/engineering/fees/transport-fee"
    );
  };
  refund = () => {
    const message = this.createClientMessage("Refund");
    this.addMessageToState(message);
    window.open(
      "https://www.srmist.edu.in/admission-india/cancellation-of-admission-and-refund-policy"
    );
  };
  scholarship = () => {
    const message = this.createClientMessage("Scholarship");
    this.addMessageToState(message);
    window.open(
      "https://www.srmist.edu.in/admission-india/engineering/fees/scholarships"
    );
  };
  CounKnowMore = () => {
    const message = this.createClientMessage("Know More");
    this.addMessageToState(message);
    window.open("https://www.srmist.edu.in/admission-india/faqs#0");
  };
  course = () => {
    const message1= this.createClientMessage("Courses Offered");
    const message = this.createChatBotMessage("Courses Offered :", {
      widget: "school",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  academics = () => {
    const message = this.createClientMessage("Academics");
    this.addMessageToState(message);
    window.open("https://www.srmist.edu.in/");
  };
  postgrad = () => {
    const message = this.createClientMessage("Post Graduate");
    this.addMessageToState(message);
    window.open("https://www.srmist.edu.in/");
  };
  international = () => {
    const message = this.createClientMessage("International");
    this.addMessageToState(message);
    window.open(
      "https://www.srmist.edu.in/admission-international/content/faqs#"
    );
  };
  events = () => {
    const message = this.createClientMessage("Events");
    this.addMessageToState(message);
    window.open("https://www.srmist.edu.in/events-archive/2021");
  };
  research = () => {
    const message = this.createClientMessage("Research");
    this.addMessageToState(message);

    window.open("https://www.srmist.edu.in/research/research-details");
  };
  campus = () => {
    
    const message = this.createClientMessage("Campus Life");
    this.addMessageToState(message);
    window.open("https://www.srmist.edu.in/campus/campus");
  };

  ElKnowMore = () => {
    const message = this.createClientMessage("Know more");
    this.addMessageToState(message);
    window.open(
      "https://www.srmist.edu.in/admission-india/engineering/admission-procedure-eligibility"
    );
  };
  adminCriteria = () => {
    const message = this.createClientMessage("Admission Criteria");
    this.addMessageToState(message);
    window.open(
      "https://www.srmist.edu.in/admission-india/engineering/admission-procedure-admission-criteria"
    );
  };
  howToApply = () => {
    const message = this.createClientMessage("How to apply");
    this.addMessageToState(message);
    window.open(
      "https://www.srmist.edu.in/admission-india/engineering/admission-procedure-how-to-apply"
    );
  };

  handlegraduate = () => {
    const message1 = this.createClientMessage("India");

    const message = this.createChatBotMessage(
      "May I know the program you are looking for",
      {
        widget: "graduate",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  handleprograms = () => {
    const message1 = this.createClientMessage("Under Graduate");
    
    const message = this.createChatBotMessage(
      "May I know which stream are you interested in",
      {
        widget: "programs",
      }
    );
this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  handleadmissions = () => {
    const message1 = this.createClientMessage("Admissions");
    const message = this.createChatBotMessage("Within admissions:", {
      widget: "admissions",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  handleAdmissionIndia = () => {
    const message1 = this.createClientMessage("Engineering");
    const message = this.createChatBotMessage("Your queries are related to :", {
      widget: "AdmissionIndia",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  handleaboutus = () => {
    const message1 = this.createClientMessage("About Us");
    
    const message = this.createChatBotMessage(
      "SRM Institute of Science and Technology  is one of the top ranking universities in India with over 52,000 full time students and more than 3200 faculty across all the campuses - Kattankulathur, Ramapuram, Vadapalani Campus – all in and around Chennai,   and Modinagar, NCR, Delhi - offering a wide range of undergraduate, postgraduate and doctoral programs in six Faculties – Engineering & Technology, Management, Medicine & Health sciences, Science & Humanities, Law and Agricultural Sciences . for Detailed Info please visit https://www.srmist.edu.in/aboutus/srm-university-where-you-have-freedom-take-wings",
      {
        widget: "aboutus",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  aboutusPage = () => {
    window.open(
      "https://www.srmist.edu.in/aboutus/srm-university-where-you-have-freedom-take-wings"
    );
  };
  hostel = () => {
    const message1 = this.createClientMessage("Hostel");
    const message = this.createChatBotMessage(
      "What do you want to know about?",
      {
        widget: "hostelQues",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  apply = () => {
    const message = this.createClientMessage("Apply");
    this.addMessageToState(message);
    window.open("https://www.srmist.edu.in/admission-india/");
  };
  fees = () => {
    const message1 = this.createClientMessage("Fee Details");
    const message = this.createChatBotMessage(
      "Which fee structure do you want to know about?",
      {
        widget: "fees",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
