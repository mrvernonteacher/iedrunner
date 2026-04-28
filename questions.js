// Walton High School - PLTW IED Question Bank
// Units 1 - 8

const pltwBanks = {
    // UNIT 1: Design Process
    1: [
        {
            q: "What is the first step of the design process?",
            opts: ["Generate Concepts", "Define the Problem", "Evaluate the Solution", "Construct a Prototype"],
            ans: "Define the Problem",
            exp: "Before you can solve a problem, you must clearly identify it, justify it, and define the criteria and constraints.",
            src: "PLTW Curriculum"
        },
        {
            q: "A process that repeats a series of steps over and over until the desired outcome is obtained is known as:",
            opts: ["Iterative", "Linear", "Sequential", "Prototypical"],
            ans: "Iterative",
            exp: "Engineering is an iterative process, meaning designers frequently circle back to previous steps to refine their solutions.",
            src: "PLTW Curriculum"
        },
        {
            q: "In which step of the design process would you use a decision matrix?",
            opts: ["Generate Concepts", "Develop a Solution", "Construct and Test", "Present the Solution"],
            ans: "Generate Concepts",
            exp: "A decision matrix is used to mathematically compare brainstormed concepts against the design criteria.",
            src: "PLTW Curriculum"
        },
        {
            q: "What is a working model used to test a design concept by making actual observations and necessary adjustments?",
            opts: ["Prototype", "Mock-up", "Thumbnail sketch", "Decision Matrix"],
            ans: "Prototype",
            exp: "A prototype is a functional model built to test how a solution will perform in the real world.",
            src: "PLTW Curriculum"
        },
        {
            q: "An engineering notebook should be written in:",
            opts: ["Pen", "Pencil", "Marker", "Invisible Ink"],
            ans: "Pen",
            exp: "Engineering notebooks are legal documents and must be written in permanent ink to prevent alteration of dates and ideas.",
            src: "PLTW Curriculum"
        }
    ],

    // UNIT 2: Technical Sketching
    2: [
        {
            q: "In an isometric sketch, how many degrees are the receding lines drawn at?",
            opts: ["30 degrees", "45 degrees", "60 degrees", "90 degrees"],
            ans: "30 degrees",
            exp: "Isometric pictorials are drawn with width and depth lines projecting at 30-degree angles from the horizontal baseline.",
            src: "PLTW Curriculum"
        },
        {
            q: "Which line type is used to represent features that cannot be seen in the current view?",
            opts: ["Object Line", "Hidden Line", "Center Line", "Construction Line"],
            ans: "Hidden Line",
            exp: "Hidden lines are drawn as short dashes to represent edges and intersections that are behind other objects.",
            src: "PLTW Curriculum"
        },
        {
            q: "When choosing the front view for an orthographic projection, you should select the view that:",
            opts: ["Shows the shortest dimension", "Has the most hidden lines", "Shows the most detail or best shape", "Is the easiest to draw"],
            ans: "Shows the most detail or best shape",
            exp: "The front view should show the longest dimension and the most characteristic shape of the object with the fewest hidden lines.",
            src: "PLTW Curriculum"
        },
        {
            q: "A line that shows the middle of a symmetrical part or a hole is called a:",
            opts: ["Center Line", "Hidden Line", "Object Line", "Section Line"],
            ans: "Center Line",
            exp: "Center lines alternate between long and short dashes to indicate the center of geometry.",
            src: "PLTW Curriculum"
        },
        {
            q: "A multiview drawing typically shows which three views?",
            opts: ["Front, Top, Right Side", "Front, Bottom, Left Side", "Top, Back, Left Side", "Isometric, Oblique, Perspective"],
            ans: "Front, Top, Right Side",
            exp: "The standard multiview projection in the US displays the Front, Top, and Right Side views of an object.",
            src: "PLTW Curriculum"
        }
    ],

    // UNIT 3: Measurement & Statistics
    3: [
        {
            q: "Which of the following is NOT a measurement typically taken with a dial caliper?",
            opts: ["Outside Diameter", "Inside Diameter", "Hole Depth", "Surface Roughness"],
            ans: "Surface Roughness",
            exp: "Dial calipers can measure outside length, inside diameter, step depth, and hole depth, but cannot measure surface texture.",
            src: "PLTW Curriculum"
        },
        {
            q: "The mean, median, and mode are all measures of:",
            opts: ["Standard Deviation", "Central Tendency", "Data Variation", "Precision"],
            ans: "Central Tendency",
            exp: "These statistics describe the center point or typical value of a data set.",
            src: "PLTW Curriculum"
        },
        {
            q: "If a set of data is normally distributed, what percentage of values fall within one standard deviation of the mean?",
            opts: ["50%", "68%", "95%", "99.7%"],
            ans: "68%",
            exp: "According to the Empirical Rule, 68% of data falls within ±1 standard deviation in a normal distribution.",
            src: "PLTW Curriculum"
        },
        {
            q: "Accuracy is defined as:",
            opts: ["The degree of closeness to the actual or accepted value", "The repeatability of a measurement", "The smallest increment on a scale", "The difference between upper and lower limits"],
            ans: "The degree of closeness to the actual or accepted value",
            exp: "Accuracy measures how close a result is to the true value, while precision measures how repeatable the result is.",
            src: "PLTW Curriculum"
        },
        {
            q: "What is the median of this data set? [2, 4, 6, 8, 10]",
            opts: ["6", "5", "8", "30"],
            ans: "6",
            exp: "The median is the exact middle number in an ordered data set.",
            src: "PLTW Curriculum"
        }
    ],

    // UNIT 4: Intro to CAD
    4: [
        {
            q: "Which tool in Onshape takes a 2D profile and pushes it into 3D space to add volume?",
            opts: ["Revolve", "Sweep", "Extrude", "Loft"],
            ans: "Extrude",
            exp: "The Extrude tool adds depth to a 2D sketch, pulling it straight out in a perpendicular direction.",
            src: "Onshape Tutorials"
        },
        {
            q: "Which geometric constraint forces two lines to meet at exactly 90 degrees?",
            opts: ["Parallel", "Tangent", "Coincident", "Perpendicular"],
            ans: "Perpendicular",
            exp: "The Perpendicular constraint ensures that the angle between two selected line segments remains locked at 90 degrees.",
            src: "Onshape Tutorials"
        },
        {
            q: "What is the first step to creating a 3D solid model in CAD?",
            opts: ["Extrude a face", "Select a sketch plane", "Apply a fillet", "Dimension the part"],
            ans: "Select a sketch plane",
            exp: "Before you can sketch the 2D profile, you must tell the software which flat plane (Front, Top, or Right) you are drawing on.",
            src: "Onshape Tutorials"
        },
        {
            q: "Which tool takes a 2D sketch and spins it around an axis to create a 3D solid?",
            opts: ["Extrude", "Revolve", "Loft", "Sweep"],
            ans: "Revolve",
            exp: "The Revolve tool requires a 2D profile and a straight axis line to spin that profile around.",
            src: "Onshape Tutorials"
        },
        {
            q: "What does the 'Fillet' tool do?",
            opts: ["Rounds over a sharp edge", "Chambers an edge at an angle", "Hollows out a part", "Combines two parts together"],
            ans: "Rounds over a sharp edge",
            exp: "A fillet removes sharp 90-degree edges by adding a curved radius.",
            src: "Onshape Tutorials"
        }
    ],

    // UNIT 5: Reverse Engineering
    5: [
        {
            q: "What are the three stages of reverse engineering?",
            opts: ["Visual, Functional, Structural", "Design, Build, Test", "Input, Process, Output", "Analyze, Destroy, Rebuild"],
            ans: "Visual, Functional, Structural",
            exp: "Reverse engineering starts with visual analysis, moves to functional testing (inputs/outputs), and ends with structural teardown.",
            src: "PLTW Curriculum"
        },
        {
            q: "The purpose of a product teardown is to:",
            opts: ["Find a way to make the product cheaper", "Understand how the parts interact and function", "Destroy a competitor's product", "Recycle the materials"],
            ans: "Understand how the parts interact and function",
            exp: "Teardowns allow engineers to inspect internal components, document how they assemble, and understand the structural mechanics.",
            src: "PLTW Curriculum"
        },
        {
            q: "Identifying the 'inputs' and 'outputs' of a mechanism occurs during which stage?",
            opts: ["Visual Analysis", "Structural Analysis", "Functional Analysis", "Redesign Phase"],
            ans: "Functional Analysis",
            exp: "Functional analysis treats the product as a 'black box' to observe what goes into it and what it produces.",
            src: "PLTW Curriculum"
        },
        {
            q: "Balance, Proportion, Contrast, and Symmetry are all examples of:",
            opts: ["Elements of Design", "Principles of Design", "Structural Analysis", "Material Properties"],
            ans: "Principles of Design",
            exp: "The Principles of Design describe how the Elements of Design (Line, Color, Form, etc.) are applied to a product.",
            src: "PLTW Curriculum"
        },
        {
            q: "Taking apart a pen to see how the spring interacts with the ink cartridge is an example of:",
            opts: ["Visual Analysis", "Functional Analysis", "Structural Analysis", "Mathematical Analysis"],
            ans: "Structural Analysis",
            exp: "Structural analysis requires a physical teardown to see how the internal components are assembled and interact.",
            src: "PLTW Curriculum"
        }
    ],

    // UNIT 6: Dimensioning
    6: [
        {
            q: "What is datum dimensioning?",
            opts: ["Dimensions are chained end-to-end", "All dimensions originate from a common point or line", "Dimensions are only placed on the top view", "Dimensions are given without tolerances"],
            ans: "All dimensions originate from a common point or line",
            exp: "Datum dimensioning (or baseline dimensioning) reduces tolerance buildup by starting all measurements from a single reference edge.",
            src: "PLTW Curriculum"
        },
        {
            q: "An acceptable amount of dimensional variation that will still allow a part to function correctly is called:",
            opts: ["Clearance", "Interference", "Tolerance", "Allowance"],
            ans: "Tolerance",
            exp: "Tolerance is the total variance allowed in a measurement (Upper Limit - Lower Limit).",
            src: "PLTW Curriculum"
        },
        {
            q: "Which of the following is a strict dimensioning rule?",
            opts: ["Always dimension to hidden lines", "Cross dimension lines whenever possible", "Do not over-dimension a part", "Place dimensions inside the object boundaries"],
            ans: "Do not over-dimension a part",
            exp: "Over-dimensioning causes confusion and manufacturing conflicts. A feature should only be dimensioned once.",
            src: "PLTW Curriculum"
        },
        {
            q: "Which type of fit occurs when two toleranced parts will always leave a gap when assembled?",
            opts: ["Interference Fit", "Clearance Fit", "Transition Fit", "Allowance Fit"],
            ans: "Clearance Fit",
            exp: "A clearance fit ensures that the largest internal part will still fit freely into the smallest external opening.",
            src: "PLTW Curriculum"
        },
        {
            q: "A hole that goes completely through a part is designated with what symbol?",
            opts: ["THRU", "DEPTH", "CBORE", "CSINK"],
            ans: "THRU",
            exp: "THRU indicates that the hole penetrates the entire thickness of the object.",
            src: "PLTW Curriculum"
        }
    ],

    // UNIT 7: Properties (30 Questions specific to provided documents and videos)
    7: [
        {
            q: "According to the Cobb Digital Library overview, why shouldn't you 'just Google it' when researching?",
            opts: ["Anyone can publish on the Internet without evaluation", "Search engines are too slow", "Google costs money", "Google filters out academic journals"],
            ans: "Anyone can publish on the Internet without evaluation",
            exp: "Information on the internet is not evaluated for accuracy and may be incorrect, misleading, or biased[cite: 31, 32].",
            src: "Evaluating Resources Full Presentation"
        },
        {
            q: "When evaluating an internet source, what does 'Currency' evaluate?",
            opts: ["The timeliness of the information", "The cost of the article", "The source of the information", "The author's intent"],
            ans: "The timeliness of the information",
            exp: "Currency asks if the information is recent enough for your specific research needs[cite: 44, 72].",
            src: "Evaluating Resources Full Presentation"
        },
        {
            q: "When evaluating a source, what does 'Relevance' refer to?",
            opts: ["The importance of the information for your needs", "Who wrote the information", "The truthfulness of the content", "When the article was published"],
            ans: "The importance of the information for your needs",
            exp: "Relevance determines the importance of the information for your needs and where it comes from[cite: 52, 73].",
            src: "Evaluating Resources Full Presentation"
        },
        {
            q: "When evaluating a source, what does 'Authority' refer to?",
            opts: ["Who wrote the information", "Where the information comes from", "The reliability of the content", "The author's intent"],
            ans: "Who wrote the information",
            exp: "Authority checks the source of the information, looking closely at who the author is[cite: 60, 74].",
            src: "Evaluating Resources Full Presentation"
        },
        {
            q: "What does 'Accuracy' mean when evaluating a website?",
            opts: ["The information is supported by facts and data", "The website looks professional", "The author has a PhD", "The site is updated daily"],
            ans: "The information is supported by facts and data",
            exp: "Accuracy measures the reliability, truthfulness, and correctness of the content by checking if it is supported by facts[cite: 68, 75].",
            src: "Evaluating Resources Full Presentation"
        },
        {
            q: "What does the 'Purpose' of a source evaluate?",
            opts: ["What the author's intent is", "How much the source costs", "The date it was published", "The spelling and grammar"],
            ans: "What the author's intent is",
            exp: "Evaluating the purpose of a source means uncovering the author's intent and whether they have an ulterior motive[cite: 76].",
            src: "Evaluating Resources Full Presentation"
        },
        {
            q: "Which of the following is considered the MOST reliable source type?",
            opts: ["Peer-reviewed academic journals", "Unfamiliar websites", "Blogs", "Individual business websites"],
            ans: "Peer-reviewed academic journals",
            exp: "Academic journal articles are reviewed by experts in the field before publication, making them highly reliable[cite: 85, 86, 106].",
            src: "Evaluating Resources Full Presentation"
        },
        {
            q: "Why is a sponsored source or one with a clear bias considered 'Less Reliable'?",
            opts: ["Because the entity may have an ulterior motive", "Because it is not peer-reviewed", "Because the author is uncredited", "Because it is too current"],
            ans: "Because the entity may have an ulterior motive",
            exp: "Materials published by an entity with an ulterior motive lack balance and neutrality, which compromises their objectivity[cite: 100, 101, 111].",
            src: "Evaluating Resources Full Presentation"
        },
        {
            q: "What property is used by engineers to estimate the weight of a product and identify unknown materials?",
            opts: ["Density", "Specific heat", "Hardness", "Ductility"],
            ans: "Density",
            exp: "Density is a measure of mass per volume used to estimate a product's weight[cite: 120].",
            src: "Properties of Engineering Materials Chart"
        },
        {
            q: "The stress level at which a material begins to permanently deform is known as what?",
            opts: ["Yield strength", "Ultimate tensile strength", "Shear modulus", "Ductility"],
            ans: "Yield strength",
            exp: "The higher the yield strength of a material, the more it resists permanent deformation[cite: 120].",
            src: "Properties of Engineering Materials Chart"
        },
        {
            q: "What is the maximum stress a material's cross-section can handle by a tension force before failing rapidly?",
            opts: ["Ultimate tensile strength", "Yield strength", "Shear modulus", "Ductility"],
            ans: "Ultimate tensile strength",
            exp: "If the ultimate tensile strength is reached, the material will fail rapidly unless the applied load is removed[cite: 120].",
            src: "Properties of Engineering Materials Chart"
        },
        {
            q: "Which property describes a material's tendency to resist twisting?",
            opts: ["Shear modulus", "Young's modulus", "Fracture toughness", "Thermal conductivity"],
            ans: "Shear modulus",
            exp: "Also called the modulus of rigidity, a larger shear modulus means a more rigid material that resists twisting[cite: 120].",
            src: "Properties of Engineering Materials Chart"
        },
        {
            q: "Young’s modulus of elasticity is defined as the ratio of:",
            opts: ["Stress to strain in tension", "Mass to volume", "Force to area", "Heat to temperature"],
            ans: "Stress to strain in tension",
            exp: "It describes the tendency of an object to deform along an axis when opposing forces are applied. The higher the value, the stiffer the material[cite: 120].",
            src: "Properties of Engineering Materials Chart"
        },
        {
            q: "A material with a high value of ductility is best suited for what manufacturing process?",
            opts: ["Rolling and drawing into wire", "Supporting heavy compressive loads", "Resisting high temperatures", "Insulating electricity"],
            ans: "Rolling and drawing into wire",
            exp: "Ductility is the ability to tolerate stretching without breaking. Brittle materials, such as ceramics, have low ductility[cite: 120].",
            src: "Properties of Engineering Materials Chart"
        },
        {
            q: "A material that can absorb a lot of impact energy without breaking is described as having high:",
            opts: ["Toughness", "Hardness", "Density", "Conductivity"],
            ans: "Toughness",
            exp: "Toughness defines a material’s ability to tolerate impact energy without breaking or fracturing[cite: 120].",
            src: "Properties of Engineering Materials Chart"
        },
        {
            q: "Which property defines a material's ability to resist various forms of indentation and penetration on its surface?",
            opts: ["Hardness", "Toughness", "Strength", "Density"],
            ans: "Hardness",
            exp: "The harder the material, the smaller the indentation an object (like a diamond) will leave when pressed into it[cite: 120].",
            src: "Properties of Engineering Materials Chart"
        },
        {
            q: "A high value of electrical resistivity is favored in materials that will provide what?",
            opts: ["Electrical insulation", "Electrical conductivity", "Thermal expansion", "Structural support"],
            ans: "Electrical insulation",
            exp: "Electrical resistivity defines how well a material resists conducting an electric current, making it vital for insulation[cite: 120].",
            src: "Properties of Engineering Materials Chart"
        },
        {
            q: "If an engineer is designing a product that needs to quickly move heat away from a source, they should look for a material with high:",
            opts: ["Thermal conductivity", "Specific heat", "Electrical resistivity", "Shear modulus"],
            ans: "Thermal conductivity",
            exp: "A high value of thermal conductivity means heat flows easily in the solid material[cite: 120].",
            src: "Properties of Engineering Materials Chart"
        },
        {
            q: "Why must engineers consider the coefficient of thermal expansion when joining materials?",
            opts: ["Most materials expand when heated, causing thermal stress", "Materials might conduct electricity when joined", "It determines the ultimate tensile strength", "It alters the specific heat"],
            ans: "Most materials expand when heated, causing thermal stress",
            exp: "A high value of thermal expansion between joined materials can induce severe stresses and needs to be considered[cite: 120].",
            src: "Properties of Engineering Materials Chart"
        },
        {
            q: "Which class of materials is characterized by containing iron, making them typically magnetic and dense?",
            opts: ["Ferrous Metals", "Nonferrous Metals", "Ceramics", "Polymers"],
            ans: "Ferrous Metals",
            exp: "Because ferrous metals contain iron, most are magnetic[cite: 126]. They are typically strong and durable[cite: 127].",
            src: "Uses of Common Materials Document"
        },
        {
            q: "What is a primary advantage of nonferrous metals?",
            opts: ["They do not contain iron, making them less susceptible to rust", "They are highly magnetic", "They are excellent thermal insulators", "They are naturally brittle"],
            ans: "They do not contain iron, making them less susceptible to rust",
            exp: "Nonferrous metals do not contain iron, making them less susceptible to rust and corrosion[cite: 130].",
            src: "Uses of Common Materials Document"
        },
        {
            q: "Brass and bronze are examples of what type of material?",
            opts: ["Alloys", "Pure elements", "Composites", "Ceramics"],
            ans: "Alloys",
            exp: "Alloys are solid mixtures of elements used to improve material properties compared to the pure base metal[cite: 132, 133].",
            src: "Uses of Common Materials Document"
        },
        {
            q: "Which material class is inorganic, non-metallic, an electrical insulator, and often brittle?",
            opts: ["Ceramics", "Polymers", "Hardwoods", "Composites"],
            ans: "Ceramics",
            exp: "Ceramics are generally stiff and strong but somewhat brittle[cite: 139]. They are excellent heat and electrical insulators[cite: 138, 141].",
            src: "Uses of Common Materials Document"
        },
        {
            q: "Polymers are organic molecules formed mainly from carbon, hydrogen, and oxygen in what kind of structure?",
            opts: ["Chain-like structure", "Crystalline lattice", "Metallic bond", "Matrix and reinforcement"],
            ans: "Chain-like structure",
            exp: "Polymers are organic molecules that are chain-like in structure[cite: 145]. They tend to be very good insulators of heat and electricity[cite: 148].",
            src: "Uses of Common Materials Document"
        },
        {
            q: "What defines a composite material?",
            opts: ["Physically combining two or more materials that retain their identities", "Chemically reacting two metals", "Melting a polymer and a ceramic together", "A pure elemental structure"],
            ans: "Physically combining two or more materials that retain their identities",
            exp: "A composite is not a mixture; each component (matrix and reinforcement) retains its identity while providing unique properties[cite: 152, 153].",
            src: "Uses of Common Materials Document"
        },
        {
            q: "In a composite material, what is the role of the reinforcement material?",
            opts: ["Provides structural support and enhances physical properties", "Gives the composite its overall bulk form", "Acts as an electrical insulator", "Makes the material transparent"],
            ans: "Provides structural support and enhances physical properties",
            exp: "The matrix gives bulk form [cite: 155], while the reinforcement (like carbon fibers) provides strength and support[cite: 156].",
            src: "Uses of Common Materials Document"
        },
        {
            q: "Where do you find the Mass Properties icon in Onshape?",
            opts: ["The lower right corner of the graphics area", "The top toolbar", "The view cube", "The feature list"],
            ans: "The lower right corner of the graphics area",
            exp: "The Mass Properties icon is located in the very lower right corner of the Onshape interface.",
            src: "Mass Properties and Materials in Onshape (YouTube)"
        },
        {
            q: "If Onshape does not display the mass of a part, what step is likely missing?",
            opts: ["A material has not been assigned", "The part is not enclosed", "The density is zero", "The drawing is open"],
            ans: "A material has not been assigned",
            exp: "Onshape calculates volume automatically, but it needs an assigned material to determine the density and calculate the mass.",
            src: "Mass Properties and Materials in Onshape (YouTube)"
        },
        {
            q: "In a tensile test, what happens during the 'plastic deformation' region?",
            opts: ["The material undergoes permanent deformation", "The material can regain its original shape", "The material fractures instantly", "The force is removed"],
            ans: "The material undergoes permanent deformation",
            exp: "Once a material passes its yield point, it enters plastic deformation where changes in shape become permanent.",
            src: "Material Properties 101 (YouTube)"
        },
        {
            q: "What caused the catastrophic failure of the WW2 Liberty ships in the Bearing Sea?",
            opts: ["The steel embrittled at low temperatures", "They used too much carbon in the wood", "The shear modulus was too high", "They were hit by projectiles"],
            ans: "The steel embrittled at low temperatures",
            exp: "The grade of steel used transitioned from ductile to brittle when exposed to the freezing temperatures of the Bearing Sea.",
            src: "Material Properties 101 (YouTube)"
        }
    ],

    // UNIT 8: Mechanisms (Cams & Friction)
    8: [
        {
            q: "What is the formula for calculating the Gear Ratio (GR) between two gears?",
            opts: ["Driven / Driver", "Driver / Driven", "Torque x Speed", "Diameter + Teeth"],
            ans: "Driven / Driver",
            exp: "Gear ratio is calculated by dividing the number of teeth on the output (driven) gear by the input (driver) gear.",
            src: "PLTW Curriculum"
        },
        {
            q: "What is the primary purpose of an idler gear?",
            opts: ["To increase torque", "To decrease speed", "To change rotational direction without affecting gear ratio", "To lock the gear train"],
            ans: "To change rotational direction without affecting gear ratio",
            exp: "Placing a gear between the driver and driven gears ensures they both rotate in the same direction, but the idler's teeth do not affect the final ratio.",
            src: "PLTW Curriculum"
        },
        {
            q: "If a driver gear with 10 teeth meshes with a driven gear with 30 teeth, what happens to the torque?",
            opts: ["Torque decreases", "Torque stays the same", "Torque triples", "Torque drops to zero"],
            ans: "Torque triples",
            exp: "A larger driven gear increases torque at the expense of speed. Since the ratio is 3:1, the output torque is 3 times greater.",
            src: "PLTW Curriculum"
        },
        {
            q: "Which mechanism converts rotary motion into linear motion?",
            opts: ["Rack and Pinion", "Bevel Gear", "Worm and Wheel", "Sprocket and Chain"],
            ans: "Rack and Pinion",
            exp: "A rack (flat gear) and pinion (round gear) system takes the circular rotation of the pinion and turns it into straight-line motion along the rack.",
            src: "PLTW Curriculum"
        },
        {
            q: "What type of gear is used to change the angle of rotation by 90 degrees?",
            opts: ["Bevel Gear", "Spur Gear", "Idler Gear", "Simple Gear Train"],
            ans: "Bevel Gear",
            exp: "Bevel gears are cone-shaped and intersect at a 90-degree angle to change the axis of rotation.",
            src: "PLTW Curriculum"
        }
    ]
};
