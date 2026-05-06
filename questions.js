// Walton High School - PLTW IED Question Bank
// Units 1 - 8 (30 Questions Per Unit)

const pltwBanks = {
    // UNIT 1: Design Process
    1: [ 
        { q: "Which step involves creating a decision matrix?", opts: ["Generate Concepts", "Develop Solution", "Evaluate Solution", "Define Problem"], ans: "Generate Concepts", exp: "A decision matrix is used during the Generate Concepts step to objectively compare brainstormed ideas.", src: "PLTW Curriculum" },
        { q: "Which step involves writing a design brief?", opts: ["Define the Problem", "Generate Concepts", "Construct and Test", "Present Solution"], ans: "Define the Problem", exp: "The design brief defines the core problem, criteria, and constraints before brainstorming begins.", src: "PLTW Curriculum" },
        { q: "A full-scale working model used to test a design is a:", opts: ["Prototype", "Mock-up", "Concept", "Sketch"], ans: "Prototype", exp: "Prototypes are fully functional models built for testing and data collection.", src: "PLTW Curriculum" },
        { q: "Which of these is a rule of brainstorming?", opts: ["Encourage wild ideas", "Criticize early", "Quality over quantity", "Work alone"], ans: "Encourage wild ideas", exp: "Wild ideas are highly encouraged in brainstorming because they can lead to innovative solutions.", src: "PLTW Curriculum" },
        { q: "An engineering notebook must be written in:", opts: ["Pen", "Pencil", "Marker", "Digital only"], ans: "Pen", exp: "Notebooks are legal documents and must be written in permanent ink.", src: "PLTW Curriculum" },
        { q: "Which of the following is NOT a rule of brainstorming?", opts: ["Criticize ideas immediately", "Welcome piling on", "Encourage wild ideas", "Focus on quantity"], ans: "Criticize ideas immediately", exp: "Criticism is strictly forbidden during the initial brainstorming phase.", src: "PLTW Curriculum" },
        { q: "An iterative process means that it is designed to be:", opts: ["Repeated to improve design", "Finished in one step", "Done purely on computer", "Approved by a manager"], ans: "Repeated to improve design", exp: "Iteration involves looping back to previous steps to refine and improve the outcome.", src: "PLTW Curriculum" },
        { q: "A group problem-solving technique in which members share ideas is:", opts: ["Brainstorming", "Reverse Engineering", "Prototyping", "CAD Modeling"], ans: "Brainstorming", exp: "Brainstorming is a collaborative process to generate a massive quantity of ideas.", src: "PLTW Curriculum" },
        { q: "Who are the people who buy and use a product?", opts: ["Consumers", "Engineers", "Designers", "Manufacturers"], ans: "Consumers", exp: "Consumers are the end-users and purchasers of the designed product.", src: "PLTW Curriculum" },
        { q: "The document that defines the problem and constraints is the:", opts: ["Design Brief", "Decision Matrix", "Gantt Chart", "Assembly Drawing"], ans: "Design Brief", exp: "The Design Brief serves as a contract outlining the problem, criteria, and constraints.", src: "PLTW Curriculum" },
        { q: "An improvement to an existing technological product is an:", opts: ["Innovation", "Invention", "Discovery", "Hypothesis"], ans: "Innovation", exp: "Innovations make existing products better, whereas inventions are entirely new.", src: "PLTW Curriculum" },
        { q: "A new product, system, or process that has never existed before is an:", opts: ["Invention", "Innovation", "Iteration", "Evaluation"], ans: "Invention", exp: "Inventions are completely novel creations that have never existed before.", src: "PLTW Curriculum" },
        { q: "What chart is commonly used for project management and scheduling?", opts: ["Gantt Chart", "Pie Chart", "Histogram", "Scatter Plot"], ans: "Gantt Chart", exp: "Gantt charts visually map out project tasks, timelines, and dependencies.", src: "PLTW Curriculum" },
        { q: "Which engineering discipline applies math/science to materials and structures?", opts: ["Civil Engineering", "Chemical Engineering", "Electrical Engineering", "Computer Engineering"], ans: "Civil Engineering", exp: "Civil engineers design and analyze public works, structures, and infrastructure.", src: "PLTW Curriculum" },
        { q: "The guidelines for human behavior regarding what is right and wrong are:", opts: ["Ethics", "Laws", "Constraints", "Criteria"], ans: "Ethics", exp: "Engineering ethics guide professionals to make morally sound and safe decisions.", src: "PLTW Curriculum" },
        { q: "The limits or restrictions on a design process are known as:", opts: ["Constraints", "Criteria", "Variables", "Prototypes"], ans: "Constraints", exp: "Constraints are the boundaries (time, budget, materials) you must stay within.", src: "PLTW Curriculum" },
        { q: "Desired specifications (elements or features) of a product or system are:", opts: ["Criteria", "Constraints", "Brainstorming", "Ethics"], ans: "Criteria", exp: "Criteria are the required features or specifications the design must possess to be successful.", src: "PLTW Curriculum" },
        { q: "Which step includes creating detailed, working CAD drawings?", opts: ["Develop a Solution", "Define the Problem", "Generate Concepts", "Evaluate Solution"], ans: "Develop a Solution", exp: "During 'Develop a Solution', engineers create the technical drawings needed to build the prototype.", src: "PLTW Curriculum" },
        { q: "Which step includes collecting performance data from a test?", opts: ["Construct and Test", "Present Solution", "Evaluate Solution", "Define Problem"], ans: "Construct and Test", exp: "This step involves physically building the prototype and recording how it performs.", src: "PLTW Curriculum" },
        { q: "Which step includes a formal presentation or portfolio?", opts: ["Present Solution", "Generate Concepts", "Develop Solution", "Define Problem"], ans: "Present Solution", exp: "Presenting the solution involves sharing the final documentation and project outcomes.", src: "PLTW Curriculum" },
        { q: "The process of analyzing a design based on testing data to see if it meets criteria is:", opts: ["Evaluate Solution", "Construct and Test", "Define Problem", "Generate Concepts"], ans: "Evaluate Solution", exp: "Evaluation is where you review the test data to ensure the design meets all constraints and criteria.", src: "PLTW Curriculum" },
        { q: "A systematic problem-solving strategy, with criteria and constraints, is the:", opts: ["Design Process", "Scientific Method", "Mathematical Model", "Algorithm"], ans: "Design Process", exp: "The Design Process is the core methodology engineers use to solve problems.", src: "PLTW Curriculum" },
        { q: "An idea that produces a similar idea or an enhanced idea is called:", opts: ["Piling On", "Criticizing", "Evaluating", "Documenting"], ans: "Piling On", exp: "Piling on is encouraged in brainstorming; it means using someone else's idea to spark your own.", src: "PLTW Curriculum" },
        { q: "A person who designs products, structures, or systems to improve lives is an:", opts: ["Engineer", "Consumer", "Accountant", "Operator"], ans: "Engineer", exp: "Engineers apply math and science to develop solutions that improve the world.", src: "PLTW Curriculum" },
        { q: "A legally recognized right to an invention is a:", opts: ["Patent", "Copyright", "Trademark", "Design Brief"], ans: "Patent", exp: "Patents protect an inventor's intellectual property from being stolen or copied.", src: "PLTW Curriculum" },
        { q: "A collection of documents that highlights your best work is a:", opts: ["Portfolio", "Notebook", "Brief", "Matrix"], ans: "Portfolio", exp: "A portfolio showcases a designer's skills, projects, and professional growth.", src: "PLTW Curriculum" },
        { q: "The person or organization that pays for a design project is the:", opts: ["Client", "Designer", "Consumer", "Target Audience"], ans: "Client", exp: "The client funds the project and ultimately approves the design brief.", src: "PLTW Curriculum" },
        { q: "Errors in an engineering notebook should be corrected by:", opts: ["A single line through, with initials", "Scribbling it out", "Using whiteout", "Tearing out the page"], ans: "A single line through, with initials", exp: "Never obscure a mistake. Strike through it once, initial it, and write the correction nearby.", src: "PLTW Curriculum" },
        { q: "Which is a major branch of engineering dealing with electricity and electronics?", opts: ["Electrical", "Civil", "Mechanical", "Chemical"], ans: "Electrical", exp: "Electrical engineering focuses on electrical systems, circuits, and power generation.", src: "PLTW Curriculum" },
        { q: "The audience that the product is specifically designed for is the:", opts: ["Target Consumer", "Client", "Designer", "Manager"], ans: "Target Consumer", exp: "The target consumer is the specific demographic intended to use the final product.", src: "PLTW Curriculum" }
    ],

    // UNIT 2: Technical Sketching
    2: [ 
        { q: "What sketch shows true width/height, with depth drawn at 45 degrees?", opts: ["Oblique", "Isometric", "Perspective", "Orthographic"], ans: "Oblique", exp: "Oblique sketches start with a flat, true-shape front face and project depth back at an angle.", src: "PLTW Curriculum" },
        { q: "In an isometric sketch, axes are drawn at what angle to horizontal?", opts: ["30 degrees", "45 degrees", "60 degrees", "90 degrees"], ans: "30 degrees", exp: "Isometric sketches project both the width and depth axes at 30 degrees from the baseline.", src: "PLTW Curriculum" },
        { q: "What line type represents an edge that is not directly visible?", opts: ["Hidden Line", "Center Line", "Object Line", "Construction Line"], ans: "Hidden Line", exp: "Hidden lines are drawn as dashed lines to indicate features hidden behind solid faces.", src: "PLTW Curriculum" },
        { q: "Which view is typically chosen as the front view?", opts: ["Most descriptive view", "Top view", "Right side view", "Smallest view"], ans: "Most descriptive view", exp: "The front view should always be the most descriptive, showing the best shape and longest dimension.", src: "PLTW Curriculum" },
        { q: "A sketch featuring a horizon line and vanishing points is:", opts: ["Perspective", "Isometric", "Oblique", "Multiview"], ans: "Perspective", exp: "Perspective sketches mimic how the human eye sees, with lines converging at vanishing points.", src: "PLTW Curriculum" },
        { q: "A tonal shading technique that uses tightly grouped dots is called:", opts: ["Stippling", "Hatching", "Cross-hatching", "Blending"], ans: "Stippling", exp: "Stippling uses dots to create shadows. The closer the dots, the darker the shadow.", src: "PLTW Curriculum" },
        { q: "When sketching, proportions are best maintained by using faint lines called:", opts: ["Construction Lines", "Object Lines", "Hidden Lines", "Border Lines"], ans: "Construction Lines", exp: "Construction lines are drawn very lightly to block out shapes and maintain proportions before drawing object lines.", src: "PLTW Curriculum" },
        { q: "Which line type is used to show the center of a circular feature?", opts: ["Center Line", "Hidden Line", "Phantom Line", "Section Line"], ans: "Center Line", exp: "Center lines use an alternating long-dash short-dash pattern to mark the center of curves or symmetry.", src: "PLTW Curriculum" },
        { q: "As a general rule, dimensions should NOT be placed:", opts: ["Inside the object", "Between views", "Aligned with object", "With extension lines"], ans: "Inside the object", exp: "Dimensions should be placed outside the object boundaries to keep the drawing uncluttered.", src: "PLTW Curriculum" },
        { q: "Which type of projection uses lines that converge at a single point?", opts: ["Perspective Projection", "Orthographic Projection", "Isometric Projection", "Oblique Projection"], ans: "Perspective Projection", exp: "Perspective drawings use vanishing points to create realistic depth.", src: "PLTW Curriculum" },
        { q: "If a line is drawn thick and dark to represent an outline, it is a(n):", opts: ["Object Line", "Construction Line", "Hidden Line", "Center Line"], ans: "Object Line", exp: "Object lines (or visible lines) are solid, dark lines representing visible edges.", src: "PLTW Curriculum" },
        { q: "Which type of oblique sketch is drawn with full depth?", opts: ["Cavalier", "Cabinet", "Isometric", "Perspective"], ans: "Cavalier", exp: "Cavalier oblique sketches are drawn to full depth, which can sometimes make them appear distorted or stretched.", src: "PLTW Curriculum" },
        { q: "Which type of oblique sketch is drawn with half depth to look more realistic?", opts: ["Cabinet", "Cavalier", "Isometric", "Orthographic"], ans: "Cabinet", exp: "Cabinet oblique sketches cut the depth in half to compensate for optical distortion.", src: "PLTW Curriculum" },
        { q: "When two lines overlap in a drawing, which line takes precedence?", opts: ["Object over Hidden", "Hidden over Object", "Center over Object", "Construction over Hidden"], ans: "Object over Hidden", exp: "According to the precedence of lines, Object lines override Hidden lines, and Hidden lines override Center lines.", src: "PLTW Curriculum" },
        { q: "An inside rounded corner on a machined part is called a:", opts: ["Fillet", "Round", "Chamfer", "Bevel"], ans: "Fillet", exp: "Fillets are interior rounded corners, usually added to reduce stress concentrations.", src: "PLTW Curriculum" },
        { q: "An outside rounded corner on a machined part is called a:", opts: ["Round", "Fillet", "Chamfer", "Spline"], ans: "Round", exp: "Rounds are exterior rounded corners, usually added to remove sharp, dangerous edges.", src: "PLTW Curriculum" },
        { q: "What defines an area's lightness or darkness in a sketch?", opts: ["Value / Tone", "Hue", "Saturation", "Texture"], ans: "Value / Tone", exp: "Value refers to the tone of a surface, created by shading to give a 3D effect.", src: "PLTW Curriculum" },
        { q: "Lines that show where a dimension starts and stops are:", opts: ["Extension Lines", "Dimension Lines", "Leader Lines", "Object Lines"], ans: "Extension Lines", exp: "Extension lines project outward from the feature being measured.", src: "PLTW Curriculum" },
        { q: "A line with an arrowhead pointing to a specific feature with a note attached is a:", opts: ["Leader Line", "Extension Line", "Dimension Line", "Center Line"], ans: "Leader Line", exp: "Leader lines are used to point to holes, curves, or specific features to attach a text note.", src: "PLTW Curriculum" },
        { q: "A sketch that shows an object's height, width, and depth in a single view is:", opts: ["Pictorial", "Multiview", "Orthographic", "Working Drawing"], ans: "Pictorial", exp: "Pictorial sketches (Isometric, Oblique, Perspective) show 3D objects on a 2D surface in a single view.", src: "PLTW Curriculum" },
        { q: "Which line indicates a part has been broken to save space on a drawing?", opts: ["Break Line", "Phantom Line", "Section Line", "Center Line"], ans: "Break Line", exp: "Break lines are jagged or zig-zag lines showing that a long, uniform part has been shortened for the drawing.", src: "PLTW Curriculum" },
        { q: "Which view is generally located directly above the Front View?", opts: ["Top View", "Bottom View", "Right Side View", "Isometric View"], ans: "Top View", exp: "In standard orthographic projection, the Top View sits directly above and aligned with the Front View.", src: "PLTW Curriculum" },
        { q: "Which view is generally located to the right of the Front View?", opts: ["Right Side View", "Left Side View", "Top View", "Bottom View"], ans: "Right Side View", exp: "In standard orthographic projection, the Right Side View aligns directly to the right of the Front View.", src: "PLTW Curriculum" },
        { q: "How many principal views can be created in a standard orthographic projection?", opts: ["6", "3", "4", "8"], ans: "6", exp: "Imagine the object in a glass box; there are 6 distinct sides (Front, Back, Top, Bottom, Left, Right).", src: "PLTW Curriculum" },
        { q: "A standardized set of rules used to create technical drawings is called:", opts: ["Conventions", "Algorithms", "Matrices", "Protocols"], ans: "Conventions", exp: "Drawing conventions ensure that engineers anywhere in the world can read and understand the plans.", src: "PLTW Curriculum" },
        { q: "Shading created by intersecting parallel lines is called:", opts: ["Cross-Hatching", "Hatching", "Stippling", "Blending"], ans: "Cross-Hatching", exp: "Cross-hatching overlaps parallel lines at different angles to build up dark tones.", src: "PLTW Curriculum" },
        { q: "In a 1-point perspective sketch, how many vanishing points are there?", opts: ["One", "Two", "Three", "Zero"], ans: "One", exp: "As the name implies, 1-point perspective uses a single vanishing point on the horizon line.", src: "PLTW Curriculum" },
        { q: "The relationship of one part of an object to another regarding size is:", opts: ["Proportion", "Symmetry", "Balance", "Rhythm"], ans: "Proportion", exp: "Proportion refers to the relative scale of elements within a design.", src: "PLTW Curriculum" },
        { q: "A line representing an alternate position of a moving part is a:", opts: ["Phantom Line", "Hidden Line", "Section Line", "Break Line"], ans: "Phantom Line", exp: "Phantom lines use two short dashes between long dashes to show motion or alternate positions.", src: "PLTW Curriculum" },
        { q: "The standard US projection method for technical drawings is:", opts: ["Third-Angle Projection", "First-Angle Projection", "Isometric Projection", "Perspective Projection"], ans: "Third-Angle Projection", exp: "The United States utilizes Third-Angle Projection, whereas much of Europe uses First-Angle.", src: "PLTW Curriculum" }
    ],

    // UNIT 3: Measurement & Statistics
    3: [ 
        { q: "On a standard dial caliper, one full revolution of the dial represents:", opts: ["0.100 inches", "0.001 inches", "1.000 inches", "0.010 inches"], ans: "0.100 inches", exp: "One full rotation of the dial needle moves the jaws exactly 0.100 inches.", src: "PLTW Curriculum" },
        { q: "The statistical term for the middle number in a sorted data set is:", opts: ["Median", "Mean", "Mode", "Standard Deviation"], ans: "Median", exp: "The median is the exact mathematical middle of a numerically ordered list.", src: "PLTW Curriculum" },
        { q: "What graph is best for showing the frequency distribution of a data set?", opts: ["Histogram", "Pie Chart", "Line Graph", "Scatter Plot"], ans: "Histogram", exp: "Histograms use bars to display how frequently data points fall into specific range 'bins'.", src: "PLTW Curriculum" },
        { q: "To convert inches to millimeters, multiply by:", opts: ["25.4", "2.54", "0.393", "12"], ans: "25.4", exp: "There are exactly 25.4 millimeters in one inch.", src: "PLTW Curriculum" },
        { q: "The total amount of variation permitted in a dimension is its:", opts: ["Tolerance", "Allowance", "Clearance", "Interference"], ans: "Tolerance", exp: "Tolerance is the difference between the upper and lower limits of a dimension.", src: "PLTW Curriculum" },
        { q: "How many significant figures are in the measurement 0.0045?", opts: ["Two", "Four", "Five", "Three"], ans: "Two", exp: "Leading zeros are never significant; only the 4 and 5 count in this measurement.", src: "PLTW Curriculum" },
        { q: "The degree to which repeated measurements show the same result is called:", opts: ["Precision", "Accuracy", "Tolerance", "Calibration"], ans: "Precision", exp: "Precision refers to the repeatability of a measurement, regardless of whether it is accurate.", src: "PLTW Curriculum" },
        { q: "Which part of a dial caliper measures the depth of a blind hole?", opts: ["Depth Rod", "Inside Jaws", "Outside Jaws", "Dial Adjustment"], ans: "Depth Rod", exp: "The depth rod extends from the back of the caliper and is designed to measure hole depths.", src: "PLTW Curriculum" },
        { q: "What is the mean of the data set: 2, 4, 6?", opts: ["4", "3", "5", "12"], ans: "4", exp: "The mean is the average. (2+4+6 = 12), and 12 / 3 = 4.", src: "PLTW Curriculum" },
        { q: "What is the base unit of mass in the SI (Metric) system?", opts: ["Kilogram", "Gram", "Pound", "Ounce"], ans: "Kilogram", exp: "While grams are common, the official SI base unit for mass is the Kilogram.", src: "PLTW Curriculum" },
        { q: "The degree of closeness of a measurement to its actual (true) value is:", opts: ["Accuracy", "Precision", "Tolerance", "Deviation"], ans: "Accuracy", exp: "If a measurement is 'accurate', it is hitting the absolute correct target value.", src: "PLTW Curriculum" },
        { q: "A curve representing a normal distribution is often called a:", opts: ["Bell Curve", "Sine Wave", "Parabola", "Histogram"], ans: "Bell Curve", exp: "A normal distribution creates a symmetrical 'bell' shape on a graph.", src: "PLTW Curriculum" },
        { q: "What does the 'Mode' represent in a data set?", opts: ["Most frequent value", "Average value", "Middle value", "Highest minus lowest"], ans: "Most frequent value", exp: "The mode is the number that appears the most often in a data set.", src: "PLTW Curriculum" },
        { q: "The difference between the highest and lowest values in a data set is the:", opts: ["Range", "Mean", "Standard Deviation", "Variance"], ans: "Range", exp: "Range is a simple measure of variation calculated by subtracting the minimum from the maximum.", src: "PLTW Curriculum" },
        { q: "A dial caliper can typically measure down to what fraction of an inch?", opts: ["One thousandth (0.001)", "One hundredth (0.01)", "One ten-thousandth (0.0001)", "One tenth (0.1)"], ans: "One thousandth (0.001)", exp: "Standard dial calipers have dial gradations that represent 0.001 inches.", src: "PLTW Curriculum" },
        { q: "The numbers on the blade of a standard inch dial caliper represent:", opts: ["Tenths of an inch", "Inches", "Hundredths of an inch", "Thousandths of an inch"], ans: "Tenths of an inch", exp: "The large numbers on the blade represent inches, and the smaller lines represent 0.100 (tenths).", src: "PLTW Curriculum" },
        { q: "Which jaws on a caliper are used to measure the diameter of a solid cylinder?", opts: ["Outside Jaws", "Inside Jaws", "Depth Rod", "Step Measuring Faces"], ans: "Outside Jaws", exp: "The large lower jaws clamp completely around the outside of an object.", src: "PLTW Curriculum" },
        { q: "Which jaws on a caliper are used to measure the diameter of a drilled hole?", opts: ["Inside Jaws", "Outside Jaws", "Depth Rod", "Step Measuring Faces"], ans: "Inside Jaws", exp: "The small upper jaws are placed inside a hole and expanded outward to take the measurement.", src: "PLTW Curriculum" },
        { q: "Data that can take on any continuous value is called:", opts: ["Continuous Data", "Discrete Data", "Nominal Data", "Ordinal Data"], ans: "Continuous Data", exp: "Continuous data can be infinitely broken down into smaller decimal values.", src: "PLTW Curriculum" },
        { q: "Data that can only take on specific distinct values (like shoe size) is:", opts: ["Discrete Data", "Continuous Data", "Ratio Data", "Interval Data"], ans: "Discrete Data", exp: "Discrete data exists in defined 'chunks' or whole numbers that cannot be broken down infinitely.", src: "PLTW Curriculum" },
        { q: "In statistics, a measure of how spread out numbers are from the average is:", opts: ["Standard Deviation", "Mean", "Median", "Mode"], ans: "Standard Deviation", exp: "Standard deviation defines the average distance of all data points from the central mean.", src: "PLTW Curriculum" },
        { q: "In a normal distribution, what percentage of data falls within 1 standard deviation?", opts: ["68%", "95%", "99.7%", "50%"], ans: "68%", exp: "The Empirical Rule states that 68% of data falls within one standard deviation of the mean.", src: "PLTW Curriculum" },
        { q: "In a normal distribution, what percentage of data falls within 2 standard deviations?", opts: ["95%", "68%", "99.7%", "100%"], ans: "95%", exp: "The Empirical Rule states that 95% of data falls within two standard deviations of the mean.", src: "PLTW Curriculum" },
        { q: "To convert millimeters to inches, you divide by:", opts: ["25.4", "2.54", "10", "12"], ans: "25.4", exp: "Because there are 25.4mm in an inch, converting back to inches requires dividing by 25.4.", src: "PLTW Curriculum" },
        { q: "The internationally recognized decimal system of weights and measures is:", opts: ["SI System (Metric)", "US Customary System", "Imperial System", "Architectural System"], ans: "SI System (Metric)", exp: "The Systeme International (SI) is the modern metric system used globally in engineering.", src: "PLTW Curriculum" },
        { q: "How many significant figures are in the measurement 1.050?", opts: ["Four", "Three", "Two", "One"], ans: "Four", exp: "The trailing zero is significant because there is a decimal point, and the middle zero is sandwiched.", src: "PLTW Curriculum" },
        { q: "How many significant figures are in the measurement 200?", opts: ["One", "Two", "Three", "Zero"], ans: "One", exp: "Trailing zeros without a decimal point are not considered significant.", src: "PLTW Curriculum" },
        { q: "A gauge used to check if a dimension is within specified tolerances is a:", opts: ["Go/No-Go Gauge", "Dial Caliper", "Micrometer", "Ruler"], ans: "Go/No-Go Gauge", exp: "A Go/No-Go gauge is a physical tool used in manufacturing to quickly verify if a part is within tolerance limits.", src: "PLTW Curriculum" },
        { q: "The process of verifying the accuracy of a measuring tool is called:", opts: ["Calibration", "Precision", "Tolerance", "Documentation"], ans: "Calibration", exp: "Calibration involves comparing a tool to a known standard to ensure its readings are accurate.", src: "PLTW Curriculum" },
        { q: "A graphical representation of the distribution of numerical data using bars is a:", opts: ["Histogram", "Line Graph", "Scatter Plot", "Pie Chart"], ans: "Histogram", exp: "Histograms display continuous data grouped into range 'bins' along the X-axis.", src: "PLTW Curriculum" }
    ],

    // UNIT 4: Intro to CAD
    4: [ 
        { q: "Which constraint forces two lines to meet at a 90-degree angle?", opts: ["Perpendicular", "Tangent", "Coincident", "Parallel"], ans: "Perpendicular", exp: "The Perpendicular constraint ensures two lines intersect at exactly 90 degrees.", src: "PLTW Curriculum" },
        { q: "Which geometric constraint forces two circles to share the same center?", opts: ["Concentric", "Coincident", "Collinear", "Tangent"], ans: "Concentric", exp: "Concentric means 'sharing the same center point'.", src: "PLTW Curriculum" },
        { q: "Drawing a 2D shape and giving it thickness is called:", opts: ["Extrusion", "Revolution", "Loft", "Sweep"], ans: "Extrusion", exp: "Extruding pulls a 2D sketch into the 3D plane.", src: "PLTW Curriculum" },
        { q: "What CAD tool creates a 3D model by spinning a 2D profile around an axis?", opts: ["Revolve", "Extrude", "Sweep", "Loft"], ans: "Revolve", exp: "The Revolve tool requires a profile and an axis of rotation.", src: "PLTW Curriculum" },
        { q: "Which operation creates a transitional sloped edge between two faces?", opts: ["Chamfer", "Fillet", "Shell", "Extrude"], ans: "Chamfer", exp: "A chamfer creates a sharp, angled cut across a corner, unlike a fillet which rounds it.", src: "PLTW Curriculum" },
        { q: "Moving an object along a straight line axis in CAD is known as:", opts: ["Translation", "Rotation", "Scaling", "Sweeping"], ans: "Translation", exp: "Translation refers to sliding an object linearly along the X, Y, or Z axis.", src: "PLTW Curriculum" },
        { q: "Which feature is used to hollow out a part, leaving a specified wall thickness?", opts: ["Shell", "Loft", "Sweep", "Cut"], ans: "Shell", exp: "The Shell tool removes the interior material of a solid block, leaving outer walls.", src: "PLTW Curriculum" },
        { q: "Duplicating a feature in a ring around an axis is done using a:", opts: ["Circular Pattern", "Linear Pattern", "Mirror", "Revolve"], ans: "Circular Pattern", exp: "A circular pattern copies a feature evenly around a central point or axis.", src: "PLTW Curriculum" },
        { q: "When using the Extrude tool, which option cuts away material?", opts: ["Remove/Cut", "Add/Join", "Intersect", "New"], ans: "Remove/Cut", exp: "Selecting 'Remove' turns an extrusion into a cut that subtracts volume from the part.", src: "PLTW Curriculum" },
        { q: "What must be applied to a 2D sketch to define its exact size?", opts: ["Dimensions", "Constraints", "Materials", "Hatching"], ans: "Dimensions", exp: "Without dimensions, a sketch is 'under-defined' and can change size unexpectedly.", src: "PLTW Curriculum" },
        { q: "In CAD, drawing features are mathematically driven by parameters, known as:", opts: ["Parametric Modeling", "Direct Modeling", "Surface Modeling", "Mesh Modeling"], ans: "Parametric Modeling", exp: "Parametric modeling uses math formulas and constraints to govern part geometry.", src: "PLTW Curriculum" },
        { q: "The list of features applied to a CAD model in chronological order is the:", opts: ["Browser / History Tree", "Assembly tree", "Materials list", "Properties window"], ans: "Browser / History Tree", exp: "The Feature Tree keeps a timeline of every operation, allowing you to edit past steps.", src: "PLTW Curriculum" },
        { q: "A file containing multiple part files mated together is an:", opts: ["Assembly", "Drawing", "Part", "Presentation"], ans: "Assembly", exp: "Assemblies combine individual parts to test how they fit and move together.", src: "PLTW Curriculum" },
        { q: "Flat, 2D surfaces used for sketching in CAD are called:", opts: ["Work Planes", "Axes", "Origins", "Views"], ans: "Work Planes", exp: "Work planes provide a flat canvas for drawing 2D sketches.", src: "PLTW Curriculum" },
        { q: "When using Center Engraving on the Epilog laser driver, what value should NOT be entered for the X direction?", opts: ["0", "Center point", "Width", "DPI"], ans: "0", exp: "Entering 0 throws the laser origin off; it requires an actual center coordinate.", src: "PLTW Curriculum" },
        { q: "Which constraint makes two circles or arcs equal in radius?", opts: ["Equal", "Tangent", "Concentric", "Coincident"], ans: "Equal", exp: "The Equal constraint forces two geometries to share exactly the same size dimensions.", src: "PLTW Curriculum" },
        { q: "Which constraint forces a line to run exactly horizontally or vertically?", opts: ["Horizontal/Vertical", "Parallel", "Collinear", "Perpendicular"], ans: "Horizontal/Vertical", exp: "This locks the line to the X or Y axis grid of the sketch.", src: "PLTW Curriculum" },
        { q: "Which constraint makes a circle touch a line at exactly one point?", opts: ["Tangent", "Coincident", "Concentric", "Intersect"], ans: "Tangent", exp: "A tangent constraint creates a smooth transition where a line grazes a curve.", src: "PLTW Curriculum" },
        { q: "Which feature blends two or more un-alike profiles to create a complex shape?", opts: ["Loft", "Sweep", "Extrude", "Revolve"], ans: "Loft", exp: "A Loft bridges the gap between two different sketch profiles on parallel planes.", src: "PLTW Curriculum" },
        { q: "Which feature pushes a 2D profile along a path to create a 3D shape?", opts: ["Sweep", "Loft", "Extrude", "Shell"], ans: "Sweep", exp: "A Sweep requires two sketches: a shape (like a circle) and a path (like a curved wire).", src: "PLTW Curriculum" },
        { q: "To mirror a 2D sketch, you must have a profile and a:", opts: ["Mirror Line", "Point", "Plane", "Circle"], ans: "Mirror Line", exp: "The mirror line acts as the axis of symmetry to reflect the sketch.", src: "PLTW Curriculum" },
        { q: "A CAD feature that adds a structural support or web to a part is a:", opts: ["Rib", "Shell", "Fillet", "Draft"], ans: "Rib", exp: "Ribs are thin walls used to brace and strengthen parts, usually inside plastic casings.", src: "PLTW Curriculum" },
        { q: "Duplicating a feature in rows and columns is done using a:", opts: ["Linear Pattern", "Circular Pattern", "Mirror", "Sweep"], ans: "Linear Pattern", exp: "Linear patterns array features along X and Y axes in a grid.", src: "PLTW Curriculum" },
        { q: "When parts are brought into an assembly, the first part is usually:", opts: ["Grounded / Fixed", "Deleted", "Mirrored", "Revolved"], ans: "Grounded / Fixed", exp: "Fixing the first part locks it in space so other parts can be constrained to it.", src: "PLTW Curriculum" },
        { q: "What dictates the way parts can move relative to each other in an assembly?", opts: ["Assembly Constraints/Mates", "Dimensions", "Materials", "Sketches"], ans: "Assembly Constraints/Mates", exp: "Mates remove degrees of freedom to simulate real-world mechanical connections.", src: "PLTW Curriculum" },
        { q: "Which mate constraint aligns two cylindrical faces along their center axis?", opts: ["Cylindrical/Insert Mate", "Flush Mate", "Angle Mate", "Tangent Mate"], ans: "Cylindrical/Insert Mate", exp: "Cylindrical or Insert mates slide pins or bolts securely into holes.", src: "PLTW Curriculum" },
        { q: "A CAD feature used to angle a surface to allow parts to be removed from a mold is:", opts: ["Draft", "Fillet", "Chamfer", "Shell"], ans: "Draft", exp: "Draft angles taper the sides of a plastic or cast part so it doesn't stick inside the mold.", src: "PLTW Curriculum" },
        { q: "To create a threaded hole in a part, you use the:", opts: ["Hole Tool", "Extrude Tool", "Revolve Tool", "Sweep Tool"], ans: "Hole Tool", exp: "The Hole tool automates the creation of standard drilled, tapped, or counterbored holes.", src: "PLTW Curriculum" },
        { q: "Which mathematical operation keeps only the volume shared by two intersecting parts?", opts: ["Intersect", "Join", "Cut", "Subtract"], ans: "Intersect", exp: "The Intersect boolean operation deletes everything except the overlapping area.", src: "PLTW Curriculum" },
        { q: "An editable numerical value used to drive CAD geometry is a:", opts: ["Parameter", "Tolerance", "Constraint", "Feature"], ans: "Parameter", exp: "Parameters are the specific mathematical variables (like 'Depth = 2in') driving the design.", src: "PLTW Curriculum" }
    ],

    // UNIT 5: Reverse Engineering
    5: [ 
        { q: "Taking apart a product to understand how it works is:", opts: ["Reverse Engineering", "Prototyping", "Brainstorming", "Value Analysis"], ans: "Reverse Engineering", exp: "Reverse engineering systematically deconstructs a product to study its mechanics and design.", src: "PLTW Curriculum" },
        { q: "Which analysis step involves identifying inputs and outputs?", opts: ["Functional Analysis", "Visual Analysis", "Structural Analysis", "Material Analysis"], ans: "Functional Analysis", exp: "Functional analysis examines what a product requires to operate and what it produces.", src: "PLTW Curriculum" },
        { q: "Analyzing the color, rhythm, and proportion of a product is:", opts: ["Visual Analysis", "Structural Analysis", "Functional Analysis", "Kinematic Analysis"], ans: "Visual Analysis", exp: "Visual analysis breaks down the aesthetic elements and principles of a design.", src: "PLTW Curriculum" },
        { q: "Disassembling a product and detailing its parts and fasteners is:", opts: ["Structural Analysis", "Visual Analysis", "Functional Analysis", "Market Analysis"], ans: "Structural Analysis", exp: "Structural analysis documents the physical components and how they fit together.", src: "PLTW Curriculum" },
        { q: "A non-functional, physical representation of a design is a:", opts: ["Mock-up", "Prototype", "Working Model", "CAD file"], ans: "Mock-up", exp: "A mock-up shows what the design will look like visually but does not function.", src: "PLTW Curriculum" },
        { q: "A primary reason a company might reverse engineer a product is:", opts: ["To improve own designs", "To build a portfolio", "To teach employees CAD", "To write a design brief"], ans: "To improve own designs", exp: "Companies analyze competing products to find flaws, save money, or improve their own products.", src: "PLTW Curriculum" },
        { q: "During a teardown, what is the most important step for reassembly?", opts: ["Documentation", "Destructive Testing", "Painting", "Melting components"], ans: "Documentation", exp: "Thorough documentation ensures you know exactly how the parts go back together.", src: "PLTW Curriculum" },
        { q: "Analyzing how physical forces affect a part is part of:", opts: ["Structural Analysis", "Visual Analysis", "Aesthetic Analysis", "Market Analysis"], ans: "Structural Analysis", exp: "Evaluating stress, force, and structural integrity is a core part of structural analysis.", src: "PLTW Curriculum" },
        { q: "A 'Black Box' systems model focuses primarily on:", opts: ["Inputs and Outputs", "Internal gears", "Color choices", "Manufacturing cost"], ans: "Inputs and Outputs", exp: "The 'Black Box' model ignores the internal mechanics and evaluates only what goes in and out.", src: "PLTW Curriculum" },
        { q: "The main purpose of a product teardown is to:", opts: ["Discover how it works", "Destroy the product", "Recycle the plastics", "Test failure point"], ans: "Discover how it works", exp: "Teardowns are the physical phase of structural analysis aimed at understanding mechanics.", src: "PLTW Curriculum" },
        { q: "A design principle where elements are mirrored across an axis is:", opts: ["Symmetry", "Asymmetry", "Rhythm", "Proportion"], ans: "Symmetry", exp: "Symmetry creates a sense of formal balance by mirroring elements.", src: "PLTW Curriculum" },
        { q: "The point where the entire weight of an object is assumed to be concentrated is:", opts: ["Center of Gravity", "Centroid", "Origin", "Fulcrum"], ans: "Center of Gravity", exp: "The center of gravity is crucial for determining how an object will balance or tumble.", src: "PLTW Curriculum" },
        { q: "Mass, volume, density, and surface area are examples of:", opts: ["Mass Properties", "Visual Elements", "Functional Inputs", "Aesthetic Principles"], ans: "Mass Properties", exp: "These properties are driven by the material and geometry of the physical object.", src: "PLTW Curriculum" },
        { q: "In visual design, 'Form follows...'?", opts: ["Function", "Aesthetics", "Cost", "Color"], ans: "Function", exp: "This famous engineering rule means the physical shape should be based on its intended purpose.", src: "PLTW Curriculum" },
        { q: "Which of the following is NOT an element of visual design?", opts: ["Cost", "Line", "Color", "Texture"], ans: "Cost", exp: "Cost is an economic constraint, not a visual element like line or texture.", src: "PLTW Curriculum" },
        { q: "The visual element that describes how a surface feels or looks like it feels is:", opts: ["Texture", "Color", "Value", "Space"], ans: "Texture", exp: "Texture can be tactile (actually feeling rough/smooth) or purely visual.", src: "PLTW Curriculum" },
        { q: "The design principle of emphasizing one feature over others is called:", opts: ["Emphasis", "Rhythm", "Balance", "Economy"], ans: "Emphasis", exp: "Emphasis directs the user's eye to a specific focal point.", src: "PLTW Curriculum" },
        { q: "Using bare minimum elements to achieve a design goal is the principle of:", opts: ["Economy", "Contrast", "Unity", "Balance"], ans: "Economy", exp: "Economy strips away unnecessary features to create a clean, purposeful design.", src: "PLTW Curriculum" },
        { q: "Creating a sense of movement or pattern through repetition is:", opts: ["Rhythm", "Emphasis", "Proportion", "Symmetry"], ans: "Rhythm", exp: "Rhythm creates flow by repeating lines, colors, or shapes.", src: "PLTW Curriculum" },
        { q: "Which visual element describes an enclosed 2D area (like a circle or square)?", opts: ["Shape", "Form", "Line", "Value"], ans: "Shape", exp: "Shapes are two-dimensional, lacking depth.", src: "PLTW Curriculum" },
        { q: "Which visual element describes a 3D volume (like a sphere or cube)?", opts: ["Form", "Shape", "Line", "Space"], ans: "Form", exp: "Form adds the third dimension of depth to a 2D shape.", src: "PLTW Curriculum" },
        { q: "A chart documenting parts, quantities, and materials during teardown is a:", opts: ["Bill of Materials", "Gantt Chart", "Decision Matrix", "Design Brief"], ans: "Bill of Materials", exp: "A BOM (Bill of Materials) is the essential recipe list for a manufactured product.", src: "PLTW Curriculum" },
        { q: "Evaluating how a product interacts with the human body is:", opts: ["Ergonomics", "Aesthetics", "Kinematics", "Economics"], ans: "Ergonomics", exp: "Ergonomics ensures products are comfortable, safe, and efficient for human use.", src: "PLTW Curriculum" },
        { q: "Which type of balance occurs when elements are not mirrored but still look balanced?", opts: ["Asymmetrical", "Symmetrical", "Radial", "Vertical"], ans: "Asymmetrical", exp: "Asymmetrical balance creates stability without perfect mirroring.", src: "PLTW Curriculum" },
        { q: "Which type of balance radiates outward from a central point?", opts: ["Radial", "Symmetrical", "Asymmetrical", "Linear"], ans: "Radial", exp: "Radial balance revolves around a central axis, like the spokes of a wheel.", src: "PLTW Curriculum" },
        { q: "The degree of lightness or darkness of a color is its:", opts: ["Value", "Hue", "Saturation", "Texture"], ans: "Value", exp: "Value determines how close a color is to pure white or pure black.", src: "PLTW Curriculum" },
        { q: "The name of a color (red, blue, green) is its:", opts: ["Hue", "Value", "Saturation", "Intensity"], ans: "Hue", exp: "Hue is the literal specific wavelength/name of the color.", src: "PLTW Curriculum" },
        { q: "Which structural element holds parts together temporarily or permanently?", opts: ["Fastener", "Bearing", "Axle", "Cam"], ans: "Fastener", exp: "Screws, bolts, and nails are common mechanical fasteners.", src: "PLTW Curriculum" },
        { q: "A drawing created after a product is built to reflect exactly how it was made is an:", opts: ["As-Built Drawing", "Exploded View", "Concept Sketch", "Isometric Sketch"], ans: "As-Built Drawing", exp: "As-built drawings document the final physical reality of a part, not just the original idea.", src: "PLTW Curriculum" },
        { q: "What describes the relationship of size between different parts of a design?", opts: ["Proportion", "Balance", "Rhythm", "Unity"], ans: "Proportion", exp: "Proportion ensures features are scaled correctly relative to one another.", src: "PLTW Curriculum" }
    ],

    // UNIT 6: Dimensioning
    6: [ 
        { q: "A working drawing assembly usually contains parts, and a:", opts: ["Parts List (BOM)", "Decision Matrix", "Gantt Chart", "Design Brief"], ans: "Parts List (BOM)", exp: "A Parts List (BOM) correlates with balloons in an assembly drawing to identify components.", src: "PLTW Curriculum" },
        { q: "Which dimension type locates the center of a hole from an edge?", opts: ["Location Dimension", "Size Dimension", "Radius Dimension", "Diameter Dimension"], ans: "Location Dimension", exp: "Location dimensions specify exactly where a feature is, not how big it is.", src: "PLTW Curriculum" },
        { q: "A hole that does not go completely through a part is a:", opts: ["Blind Hole", "Thru Hole", "Countersink", "Counterbore"], ans: "Blind Hole", exp: "A blind hole stops at a specific depth inside the material.", src: "PLTW Curriculum" },
        { q: "Which tolerance specifies a target with an equal plus and minus variance?", opts: ["Bilateral", "Unilateral", "Limit", "General"], ans: "Bilateral", exp: "Bilateral tolerances (e.g., +/- 0.05) allow deviation equally in both directions.", src: "PLTW Curriculum" },
        { q: "According to guidelines, you should NEVER dimension to a:", opts: ["Hidden Line", "Center Line", "Object Line", "Extension Line"], ans: "Hidden Line", exp: "Dimensioning to hidden lines is bad practice; you should project a different view to dimension visible lines.", src: "PLTW Curriculum" },
        { q: "Which assembly constraint makes two flat faces exactly even with each other?", opts: ["Flush", "Mate", "Insert", "Tangent"], ans: "Flush", exp: "A flush constraint aligns two surfaces so they share the exact same plane.", src: "PLTW Curriculum" },
        { q: "What type of view shows how parts fit together by pulling them apart?", opts: ["Exploded View", "Section View", "Detail View", "Auxiliary View"], ans: "Exploded View", exp: "Exploded views graphically dismantle an assembly to reveal its internal relationships.", src: "PLTW Curriculum" },
        { q: "When placing dimensions, the overall dimension should be placed:", opts: ["Farthest from view", "Closest to view", "Inside the view", "Attached to hidden line"], ans: "Farthest from view", exp: "Overall dimensions go on the outside to prevent extension lines from crossing dimension lines.", src: "PLTW Curriculum" },
        { q: "The tightest possible fit between two mating parts is called the:", opts: ["Allowance", "Clearance", "Tolerance", "Deviation"], ans: "Allowance", exp: "Allowance is the minimum clearance (or maximum interference) between mating features.", src: "PLTW Curriculum" },
        { q: "Dimensioning from a single point of origin (datum) reduces:", opts: ["Tolerance Accumulation", "Material Cost", "CAD File Size", "Surface Area"], ans: "Tolerance Accumulation", exp: "Datum dimensioning prevents errors from stacking up across multiple sequential measurements.", src: "PLTW Curriculum" },
        { q: "Dimensioning features continuously from end to end is called:", opts: ["Chain Dimensioning", "Datum Dimensioning", "Baseline Dimensioning", "Ordinate Dimensioning"], ans: "Chain Dimensioning", exp: "Chain dimensioning places measurements end-to-end but risks severe tolerance stack-up.", src: "PLTW Curriculum" },
        { q: "A fit where two parts always have a space between them is a:", opts: ["Clearance Fit", "Interference Fit", "Transition Fit", "Force Fit"], ans: "Clearance Fit", exp: "A clearance fit ensures the inner part is always smaller than the outer hole.", src: "PLTW Curriculum" },
        { q: "A fit where two parts are forced together (internal larger than external hole) is a:", opts: ["Interference Fit", "Clearance Fit", "Sliding Fit", "Running Fit"], ans: "Interference Fit", exp: "An interference fit requires force (like a press) because the pin is physically larger than the hole.", src: "PLTW Curriculum" },
        { q: "To permanently lock two parts together in an Onshape assembly, you should use a:", opts: ["Fastened Mate", "Fixed Constraint", "Flush Mate", "Slider Mate"], ans: "Fastened Mate", exp: "A Fastened Mate removes all degrees of freedom between the two connected parts.", src: "PLTW Curriculum" },
        { q: "In Onshape, mates are attached to specific coordinate systems on parts known as:", opts: ["Mate Connectors", "Origins", "Datum Planes", "Nodes"], ans: "Mate Connectors", exp: "Mate Connectors serve as anchor points for aligning assemblies.", src: "PLTW Curriculum" },
        { q: "Circles and drilled holes should be dimensioned by their:", opts: ["Diameter", "Radius", "Circumference", "Area"], ans: "Diameter", exp: "Full 360-degree circles and holes are dimensioned by diameter using the Ø symbol.", src: "PLTW Curriculum" },
        { q: "Arcs (incomplete circles) should be dimensioned by their:", opts: ["Radius", "Diameter", "Chord", "Arc Length"], ans: "Radius", exp: "Incomplete curves and fillets are dimensioned by radius using the R symbol.", src: "PLTW Curriculum" },
        { q: "Which view zooms in on a small, complex part of a drawing for clarity?", opts: ["Detail View", "Section View", "Auxiliary View", "Exploded View"], ans: "Detail View", exp: "Detail views enlarge a small section of a drawing to show intricate features.", src: "PLTW Curriculum" },
        { q: "Which view is used to show a slanted surface in its true size and shape?", opts: ["Auxiliary View", "Section View", "Detail View", "Isometric View"], ans: "Auxiliary View", exp: "Standard orthographic views distort slanted faces. Auxiliary views project perpendicularly from the slanted face.", src: "PLTW Curriculum" },
        { q: "A hole with a conical recess to allow a screw head to sit flush is a:", opts: ["Countersink", "Counterbore", "Tapped Hole", "Blind Hole"], ans: "Countersink", exp: "Countersinks have an angled (conical) recess specifically for flat-head screws.", src: "PLTW Curriculum" },
        { q: "A hole with a cylindrical recess to allow a bolt head to sit flush is a:", opts: ["Counterbore", "Countersink", "Tapped Hole", "Blind Hole"], ans: "Counterbore", exp: "Counterbores have a flat, cylindrical recess designed to hide the head of a standard bolt.", src: "PLTW Curriculum" },
        { q: "A hole that has internal threads cut into it is called a:", opts: ["Tapped Hole", "Clearance Hole", "Blind Hole", "Countersink"], ans: "Tapped Hole", exp: "Tapped holes contain threads that mate directly with screws or bolts.", src: "PLTW Curriculum" },
        { q: "The looseness or tightness of a fit between mating parts is the:", opts: ["Allowance", "Tolerance", "Deviation", "Clearance"], ans: "Allowance", exp: "Allowance dictates the intended gap or interference between two assembled features.", src: "PLTW Curriculum" },
        { q: "In an exploded view drawing, parts are linked by:", opts: ["Trail Lines / Tweak Lines", "Extension Lines", "Object Lines", "Hidden Lines"], ans: "Trail Lines / Tweak Lines", exp: "Trail lines map exactly where the part needs to move to assemble.", src: "PLTW Curriculum" },
        { q: "A circle with a number inside that points to a part in an assembly drawing is a:", opts: ["Balloon", "Bubble", "Note", "Detail Callout"], ans: "Balloon", exp: "Balloons map physical parts in a drawing to rows in the Bill of Materials.", src: "PLTW Curriculum" },
        { q: "What tolerance is given as +0.05 and -0.00?", opts: ["Unilateral", "Bilateral", "Limit", "General"], ans: "Unilateral", exp: "A unilateral tolerance permits variation in one direction only.", src: "PLTW Curriculum" },
        { q: "What tolerance provides only the absolute maximum and minimum allowed sizes?", opts: ["Limit", "Bilateral", "Unilateral", "General"], ans: "Limit", exp: "Limit tolerances bypass the +/- notation and just give you the top and bottom values.", src: "PLTW Curriculum" },
        { q: "If a part is dimensioned 2.00 +/- 0.10, the total tolerance is:", opts: ["0.20", "0.10", "2.10", "1.90"], ans: "0.20", exp: "The total tolerance is the difference between the max (2.10) and min (1.90), which is 0.20.", src: "PLTW Curriculum" },
        { q: "Where should dimensions generally be placed in a multiview drawing?", opts: ["Between the views", "Inside the object", "Above the top view", "Below the front view"], ans: "Between the views", exp: "Placing dimensions between the views makes it easier to relate the measurement to both profiles.", src: "PLTW Curriculum" },
        { q: "The 'X' in a hole dimension note (e.g., 4X Ø0.50) indicates:", opts: ["Number of identical holes", "Multiplier", "Unknown variable", "Cross section"], ans: "Number of identical holes", exp: "This shorthand means there are exactly 4 holes of that identical size on the part.", src: "PLTW Curriculum" }
    ],

    // UNIT 7: Properties of Engineering Materials
    7: [
        { q: "According to the Cobb Digital Library overview, why shouldn't you 'just Google it' when researching?", opts: ["Anyone can publish on the Internet without evaluation", "Search engines are too slow", "Google costs money", "Google filters out academic journals"], ans: "Anyone can publish on the Internet without evaluation", exp: "Information on the internet is not evaluated for accuracy and may be incorrect, misleading, or biased.", src: "Evaluating Resources Full Presentation" },
        { q: "When evaluating an internet source, what does 'Currency' evaluate?", opts: ["The timeliness of the information", "The cost of the article", "The source of the information", "The author's intent"], ans: "The timeliness of the information", exp: "Currency asks if the information is recent enough for your specific research needs.", src: "Evaluating Resources Full Presentation" },
        { q: "When evaluating a source, what does 'Relevance' refer to?", opts: ["The importance of the information for your needs", "Who wrote the information", "The truthfulness of the content", "When the article was published"], ans: "The importance of the information for your needs", exp: "Relevance determines the importance of the information for your needs and where it comes from.", src: "Evaluating Resources Full Presentation" },
        { q: "When evaluating a source, what does 'Authority' refer to?", opts: ["Who wrote the information", "Where the information comes from", "The reliability of the content", "The author's intent"], ans: "Who wrote the information", exp: "Authority checks the source of the information, looking closely at who the author is.", src: "Evaluating Resources Full Presentation" },
        { q: "What does 'Accuracy' mean when evaluating a website?", opts: ["The information is supported by facts and data", "The website looks professional", "The author has a PhD", "The site is updated daily"], ans: "The information is supported by facts and data", exp: "Accuracy measures the reliability, truthfulness, and correctness of the content by checking if it is supported by facts.", src: "Evaluating Resources Full Presentation" },
        { q: "What does the 'Purpose' of a source evaluate?", opts: ["What the author's intent is", "How much the source costs", "The date it was published", "The spelling and grammar"], ans: "What the author's intent is", exp: "Evaluating the purpose of a source means uncovering the author's intent and whether they have an ulterior motive.", src: "Evaluating Resources Full Presentation" },
        { q: "Which of the following is considered the MOST reliable source type?", opts: ["Peer-reviewed academic journals", "Unfamiliar websites", "Blogs", "Individual business websites"], ans: "Peer-reviewed academic journals", exp: "Academic journal articles are reviewed by experts in the field before publication, making them highly reliable.", src: "Evaluating Resources Full Presentation" },
        { q: "Why is a sponsored source or one with a clear bias considered 'Less Reliable'?", opts: ["Because the entity may have an ulterior motive", "Because it is not peer-reviewed", "Because the author is uncredited", "Because it is too current"], ans: "Because the entity may have an ulterior motive", exp: "Materials published by an entity with an ulterior motive lack balance and neutrality, which compromises their objectivity.", src: "Evaluating Resources Full Presentation" },
        { q: "What property is used by engineers to estimate the weight of a product and identify unknown materials?", opts: ["Density", "Specific heat", "Hardness", "Ductility"], ans: "Density", exp: "Density is a measure of mass per volume used to estimate a product's weight.", src: "Properties of Engineering Materials Chart" },
        { q: "The stress level at which a material begins to permanently deform is known as what?", opts: ["Yield strength", "Ultimate tensile strength", "Shear modulus", "Ductility"], ans: "Yield strength", exp: "The higher the yield strength of a material, the more it resists permanent deformation.", src: "Properties of Engineering Materials Chart" },
        { q: "What is the maximum stress a material's cross-section can handle by a tension force before failing rapidly?", opts: ["Ultimate tensile strength", "Yield strength", "Shear modulus", "Ductility"], ans: "Ultimate tensile strength", exp: "If the ultimate tensile strength is reached, the material will fail rapidly unless the applied load is removed.", src: "Properties of Engineering Materials Chart" },
        { q: "Which property describes a material's tendency to resist twisting?", opts: ["Shear modulus", "Young's modulus", "Fracture toughness", "Thermal conductivity"], ans: "Shear modulus", exp: "Also called the modulus of rigidity, a larger shear modulus means a more rigid material that resists twisting.", src: "Properties of Engineering Materials Chart" },
        { q: "Young’s modulus of elasticity is defined as the ratio of:", opts: ["Stress to strain in tension", "Mass to volume", "Force to area", "Heat to temperature"], ans: "Stress to strain in tension", exp: "It describes the tendency of an object to deform along an axis when opposing forces are applied. The higher the value, the stiffer the material.", src: "Properties of Engineering Materials Chart" },
        { q: "A material with a high value of ductility is best suited for what manufacturing process?", opts: ["Rolling and drawing into wire", "Supporting heavy compressive loads", "Resisting high temperatures", "Insulating electricity"], ans: "Rolling and drawing into wire", exp: "Ductility is the ability to tolerate stretching without breaking. Brittle materials, such as ceramics, have low ductility.", src: "Properties of Engineering Materials Chart" },
        { q: "A material that can absorb a lot of impact energy without breaking is described as having high:", opts: ["Toughness", "Hardness", "Density", "Conductivity"], ans: "Toughness", exp: "Toughness defines a material’s ability to tolerate impact energy without breaking or fracturing.", src: "Properties of Engineering Materials Chart" },
        { q: "Which property defines a material's ability to resist various forms of indentation and penetration on its surface?", opts: ["Hardness", "Toughness", "Strength", "Density"], ans: "Hardness", exp: "The harder the material, the smaller the indentation an object (like a diamond) will leave when pressed into it.", src: "Properties of Engineering Materials Chart" },
        { q: "A high value of electrical resistivity is favored in materials that will provide what?", opts: ["Electrical insulation", "Electrical conductivity", "Thermal expansion", "Structural support"], ans: "Electrical insulation", exp: "Electrical resistivity defines how well a material resists conducting an electric current, making it vital for insulation.", src: "Properties of Engineering Materials Chart" },
        { q: "If an engineer is designing a product that needs to quickly move heat away from a source, they should look for a material with high:", opts: ["Thermal conductivity", "Specific heat", "Electrical resistivity", "Shear modulus"], ans: "Thermal conductivity", exp: "A high value of thermal conductivity means heat flows easily in the solid material.", src: "Properties of Engineering Materials Chart" },
        { q: "Why must engineers consider the coefficient of thermal expansion when joining materials?", opts: ["Most materials expand when heated, causing thermal stress", "Materials might conduct electricity when joined", "It determines the ultimate tensile strength", "It alters the specific heat"], ans: "Most materials expand when heated, causing thermal stress", exp: "A high value of thermal expansion between joined materials can induce severe stresses and needs to be considered.", src: "Properties of Engineering Materials Chart" },
        { q: "Which class of materials is characterized by containing iron, making them typically magnetic and dense?", opts: ["Ferrous Metals", "Nonferrous Metals", "Ceramics", "Polymers"], ans: "Ferrous Metals", exp: "Because ferrous metals contain iron, most are magnetic. They are typically strong and durable.", src: "Uses of Common Materials Document" },
        { q: "What is a primary advantage of nonferrous metals?", opts: ["They do not contain iron, making them less susceptible to rust", "They are highly magnetic", "They are excellent thermal insulators", "They are naturally brittle"], ans: "They do not contain iron, making them less susceptible to rust", exp: "Nonferrous metals do not contain iron, making them less susceptible to rust and corrosion.", src: "Uses of Common Materials Document" },
        { q: "Brass and bronze are examples of what type of material?", opts: ["Alloys", "Pure elements", "Composites", "Ceramics"], ans: "Alloys", exp: "Alloys are solid mixtures of elements used to improve material properties compared to the pure base metal.", src: "Uses of Common Materials Document" },
        { q: "Which material class is inorganic, non-metallic, an electrical insulator, and often brittle?", opts: ["Ceramics", "Polymers", "Hardwoods", "Composites"], ans: "Ceramics", exp: "Ceramics are generally stiff and strong but somewhat brittle. They are excellent heat and electrical insulators.", src: "Uses of Common Materials Document" },
        { q: "Polymers are organic molecules formed mainly from carbon, hydrogen, and oxygen in what kind of structure?", opts: ["Chain-like structure", "Crystalline lattice", "Metallic bond", "Matrix and reinforcement"], ans: "Chain-like structure", exp: "Polymers are organic molecules that are chain-like in structure. They tend to be very good insulators of heat and electricity.", src: "Uses of Common Materials Document" },
        { q: "What defines a composite material?", opts: ["Physically combining two or more materials that retain their identities", "Chemically reacting two metals", "Melting a polymer and a ceramic together", "A pure elemental structure"], ans: "Physically combining two or more materials that retain their identities", exp: "A composite is not a mixture; each component (matrix and reinforcement) retains its identity while providing unique properties.", src: "Uses of Common Materials Document" },
        { q: "In a composite material, what is the role of the reinforcement material?", opts: ["Provides structural support and enhances physical properties", "Gives the composite its overall bulk form", "Acts as an electrical insulator", "Makes the material transparent"], ans: "Provides structural support and enhances physical properties", exp: "The matrix gives bulk form, while the reinforcement (like carbon fibers) provides strength and support.", src: "Uses of Common Materials Document" },
        { q: "Where do you find the Mass Properties icon in Onshape?", opts: ["The lower right corner of the graphics area", "The top toolbar", "The view cube", "The feature list"], ans: "The lower right corner of the graphics area", exp: "The Mass Properties icon is located in the very lower right corner of the Onshape interface.", src: "Mass Properties and Materials in Onshape (YouTube)" },
        { q: "If Onshape does not display the mass of a part, what step is likely missing?", opts: ["A material has not been assigned", "The part is not enclosed", "The density is zero", "The drawing is open"], ans: "A material has not been assigned", exp: "Onshape calculates volume automatically, but it needs an assigned material to determine the density and calculate the mass.", src: "Mass Properties and Materials in Onshape (YouTube)" },
        { q: "In a tensile test, what happens during the 'plastic deformation' region?", opts: ["The material undergoes permanent deformation", "The material can regain its original shape", "The material fractures instantly", "The force is removed"], ans: "The material undergoes permanent deformation", exp: "Once a material passes its yield point, it enters plastic deformation where changes in shape become permanent.", src: "Material Properties 101 (YouTube)" },
        { q: "What caused the catastrophic failure of the WW2 Liberty ships in the Bearing Sea?", opts: ["The steel embrittled at low temperatures", "They used too much carbon in the wood", "The shear modulus was too high", "They were hit by projectiles"], ans: "The steel embrittled at low temperatures", exp: "The grade of steel used transitioned from ductile to brittle when exposed to the freezing temperatures of the Bearing Sea.", src: "Material Properties 101 (YouTube)" }
    ],

    // UNIT 8: Mechanisms (Cams & Friction)
    8: [ 
        { q: "The formula for Mechanical Advantage is:", opts: ["Output Force / Input Force", "Work / Time", "Force * Distance", "Mass * Acceleration"], ans: "Output Force / Input Force", exp: "Mechanical advantage evaluates how much a machine multiplies your input effort.", src: "PLTW Curriculum" },
        { q: "A mechanism consisting of a rotating profile and a follower is a:", opts: ["Cam and Follower", "Rack and Pinion", "Gear Train", "Lever"], ans: "Cam and Follower", exp: "The cam's profile translates its rotary motion into the linear up-and-down motion of the follower.", src: "PLTW Curriculum" },
        { q: "Which type of friction occurs when surfaces are sliding past each other?", opts: ["Kinetic Friction", "Static Friction", "Rolling Friction", "Fluid Friction"], ans: "Kinetic Friction", exp: "Kinetic friction opposes the ongoing sliding motion of two surfaces.", src: "PLTW Curriculum" },
        { q: "Hooke's Law relates to the force exerted by a:", opts: ["Spring", "Cam", "Gear", "Lever"], ans: "Spring", exp: "Hooke's Law states that the force needed to extend or compress a spring scales linearly with distance.", src: "PLTW Curriculum" },
        { q: "Work is defined as:", opts: ["Force x Distance", "Mass x Acceleration", "Power x Time", "Output / Input"], ans: "Force x Distance", exp: "Work is the mechanical transfer of energy, calculated by multiplying force by the distance moved.", src: "PLTW Curriculum" },
        { q: "The gear ratio of a simple gear train is calculated by dividing teeth on the:", opts: ["Driven by Driver", "Driver by Driven", "Idler by Driver", "Driven by Idler"], ans: "Driven by Driver", exp: "Dividing the output (driven) by the input (driver) yields the gear ratio.", src: "PLTW Curriculum" },
        { q: "The purpose of an idler gear is to:", opts: ["Change direction (no ratio change)", "Increase ratio", "Decrease torque", "Increase speed"], ans: "Change direction (no ratio change)", exp: "Idlers synchronize rotation direction but do not mathematically alter the overall gear ratio.", src: "PLTW Curriculum" },
        { q: "A lever with the fulcrum directly between the effort and load is a:", opts: ["1st Class Lever", "2nd Class Lever", "3rd Class Lever", "4th Class Lever"], ans: "1st Class Lever", exp: "A seesaw is a classic example of a 1st Class Lever.", src: "PLTW Curriculum" },
        { q: "The force of static friction is generally ____ than the force of kinetic friction.", opts: ["Greater", "Less", "Equal to", "Unrelated to"], ans: "Greater", exp: "It requires more force to 'break' static friction to start moving than it takes to keep it moving.", src: "PLTW Curriculum" },
        { q: "In Hooke's Law (F = kx), what does 'k' represent?", opts: ["Spring Constant", "Kinetic Energy", "Mass", "Distance"], ans: "Spring Constant", exp: "The spring constant 'k' measures the stiffness of the specific spring.", src: "PLTW Curriculum" },
        { q: "Ideal Mechanical Advantage (IMA) does NOT account for:", opts: ["Friction", "Distance", "Input Length", "Output Length"], ans: "Friction", exp: "IMA represents perfect mathematical efficiency; AMA accounts for physical friction.", src: "PLTW Curriculum" },
        { q: "A wheel with a groove for a rope or cable is a:", opts: ["Pulley", "Gear", "Sprocket", "Cam"], ans: "Pulley", exp: "Pulleys route cables to lift loads and change the direction of applied force.", src: "PLTW Curriculum" },
        { q: "An inclined plane wrapped around a cylinder creates a:", opts: ["Screw", "Wedge", "Cam", "Rack and Pinion"], ans: "Screw", exp: "The threads of a screw are effectively tiny inclined planes wrapped around a central shaft.", src: "PLTW Curriculum" },
        { q: "If a motor spins a small 10-tooth gear driving a 30-tooth gear, the output has:", opts: ["More torque, less speed", "More torque, more speed", "Less torque, more speed", "Less torque, less speed"], ans: "More torque, less speed", exp: "A smaller gear driving a larger gear increases torque but sacrifices rotational speed.", src: "PLTW Curriculum" },
        { q: "Power is defined as:", opts: ["Work divided by Time", "Force times Distance", "Mass times Acceleration", "Input divided by Output"], ans: "Work divided by Time", exp: "Power is the rate at which Work is done over a specific period of Time.", src: "PLTW Curriculum" },
        { q: "A lever with the load between the fulcrum and the effort is a:", opts: ["2nd Class Lever", "1st Class Lever", "3rd Class Lever", "4th Class Lever"], ans: "2nd Class Lever", exp: "A wheelbarrow is a classic example of a 2nd Class Lever.", src: "PLTW Curriculum" },
        { q: "A lever with the effort between the fulcrum and the load is a:", opts: ["3rd Class Lever", "2nd Class Lever", "1st Class Lever", "4th Class Lever"], ans: "3rd Class Lever", exp: "A pair of tweezers or a human arm is a classic example of a 3rd Class Lever.", src: "PLTW Curriculum" },
        { q: "A mechanism that converts rotary motion into linear motion is a:", opts: ["Rack and Pinion", "Bevel Gear", "Worm Gear", "Belt and Pulley"], ans: "Rack and Pinion", exp: "The pinion spins to drive the flat, toothed rack in a straight line.", src: "PLTW Curriculum" },
        { q: "Which gear type allows motion to be transmitted at a 90-degree angle?", opts: ["Bevel Gear", "Spur Gear", "Rack and Pinion", "Sprocket"], ans: "Bevel Gear", exp: "Bevel gears intersect on a cone to redirect rotation by 90 degrees.", src: "PLTW Curriculum" },
        { q: "A twisting force that causes rotation is called:", opts: ["Torque", "Tension", "Shear", "Work"], ans: "Torque", exp: "Torque is a measure of rotational or twisting force.", src: "PLTW Curriculum" },
        { q: "The ratio of AMA to IMA is used to calculate a machine's:", opts: ["Efficiency", "Power", "Work", "Torque"], ans: "Efficiency", exp: "Efficiency measures how much energy is lost to friction compared to mathematical perfection.", src: "PLTW Curriculum" },
        { q: "Two inclined planes placed back to back form a:", opts: ["Wedge", "Screw", "Pulley", "Lever"], ans: "Wedge", exp: "A wedge (like an axe) is a simple machine made of two intersecting inclined planes.", src: "PLTW Curriculum" },
        { q: "In a pulley system, the IMA is generally equal to the number of:", opts: ["Supporting rope strands", "Pulleys", "Weights", "Gears"], ans: "Supporting rope strands", exp: "By counting the upward-pulling strands of rope, you can quickly find a pulley's IMA.", src: "PLTW Curriculum" },
        { q: "Which system uses a chain instead of a belt to transmit power?", opts: ["Sprocket and Chain", "Pulley and Belt", "Gear Train", "Cam and Follower"], ans: "Sprocket and Chain", exp: "Sprockets have teeth that lock into a chain (like a bicycle), preventing slippage.", src: "PLTW Curriculum" },
        { q: "If Driver gear has 20 teeth and Driven has 60, the Gear Ratio is:", opts: ["3:1", "1:3", "20:1", "60:1"], ans: "3:1", exp: "Driven / Driver = 60 / 20 = 3.", src: "PLTW Curriculum" },
        { q: "If a machine has an IMA of 4 and an AMA of 2, its efficiency is:", opts: ["50%", "200%", "2%", "8%"], ans: "50%", exp: "AMA / IMA * 100 = (2 / 4) * 100 = 50%.", src: "PLTW Curriculum" },
        { q: "A gear system where a single tooth gear drives a larger gear, offering massive torque increase:", opts: ["Worm and Wheel", "Rack and Pinion", "Bevel Gear", "Spur Gear"], ans: "Worm and Wheel", exp: "A worm acts as a single-tooth gear and can create massive gear ratios and torque.", src: "PLTW Curriculum" },
        { q: "The distance between two adjacent threads on a screw is the:", opts: ["Pitch", "Diameter", "Circumference", "Lead"], ans: "Pitch", exp: "Pitch measures the gap between threads. Lead measures how far the screw drives per rotation.", src: "PLTW Curriculum" },
        { q: "A fixed point around which a lever rotates is the:", opts: ["Fulcrum", "Effort", "Load", "Resistance"], ans: "Fulcrum", exp: "The fulcrum acts as the hinge or pivot point for any lever.", src: "PLTW Curriculum" },
        { q: "If input distance is 10ft and output distance is 2ft, the IMA is:", opts: ["5", "0.2", "20", "8"], ans: "5", exp: "IMA = Input Distance / Output Distance. 10 / 2 = 5.", src: "PLTW Curriculum" }
    ]
    // UNIT 9: Spring Final Review (EOC Blueprint Aligned - Part 1)
    9: [
        // GLOBAL CONCEPTS (~25% of EOC Blueprint)
        { 
            q: "Which of the following best defines the primary role of an engineer?", 
            opts: ["Running experiments to discover new laws of physics", "The creation of solutions to meet the needs of people and society", "Fixing broken mechanical equipment in a shop", "Writing complex computer algorithms for data sorting"], 
            ans: "The creation of solutions to meet the needs of people and society", 
            exp: "Engineering is the creation of solutions, such as new and improved products, technologies, systems and processes, to meet the needs of people and society. [cite: 251]", 
            src: "PLTW Framework (CAR-A)" 
        },
        { 
            q: "According to professional codes of ethics, engineers have a primary responsibility to serve:", 
            opts: ["The public interest", "Their personal bank account", "Only their direct employer", "The marketing department"], 
            ans: "The public interest", 
            exp: "Engineers have a responsibility to serve the public interest, their clients, and the profession with a high degree of honesty, integrity, and accountability. [cite: 266]", 
            src: "PLTW Framework (ERM-A)" 
        },
        { 
            q: "Evaluating a complex, real-world problem requires engineers to balance cost, safety, and environmental impacts. This balancing act is known as:", 
            opts: ["Prototyping", "Tolerance accumulation", "Making trade-offs", "Reverse engineering"], 
            ans: "Making trade-offs", 
            exp: "Engineers must identify the need for trade-offs to address a range of criteria and constraints, including cost, safety, reliability, and environmental impacts. [cite: 274]", 
            src: "PLTW Framework (ERM-B)" 
        },
        { 
            q: "When reviewing statistical data, which of the following is an appropriate measure of the 'center' of a normal data distribution?", 
            opts: ["Interquartile range", "Standard deviation", "Mean", "Variance"], 
            ans: "Mean", 
            exp: "Engineers use statistics appropriate to the shape of the data distribution to compare center (median, mean) and spread. [cite: 242]", 
            src: "PLTW Framework (CCP-G)" 
        },
        { 
            q: "Which of the following graphical representations is best suited for showing the distribution of a single set of measurement data?", 
            opts: ["Gantt chart", "Histogram", "Decision matrix", "Exploded view"], 
            ans: "Histogram", 
            exp: "Experimental data for a single count or measurement can be graphically represented with charts and plots such as histograms or dot plots. [cite: 238]", 
            src: "PLTW Framework (CCP-G)" 
        },
        { 
            q: "In an engineering context, taking action for collective well-being and using natural resources effectively is central to:", 
            opts: ["Sustainable development", "Algorithm design", "CAD modeling", "Spatial visualization"], 
            ans: "Sustainable development", 
            exp: "Engineers must take action for collective well-being and sustainable development using an ethical decision-making process. [cite: 275] This includes using natural resources effectively and efficiently. [cite: 277]", 
            src: "PLTW Framework (CCP-J)" 
        },
        { 
            q: "Which principle aligns a product's design specifically with its intended human use and ergonomics?", 
            opts: ["Human-centered design", "Generative design", "Algorithmic thinking", "Parametric modeling"], 
            ans: "Human-centered design", 
            exp: "Engineers explain the benefits of human-centered design and apply principles to align product design with intended use. [cite: 366]", 
            src: "PLTW Framework (CCP-J)" 
        },
        { 
            q: "Why is it important for engineers to define the 'life cycle' of a product?", 
            opts: ["To determine the retail price", "To understand its environmental and societal impacts from creation to disposal", "To know how many to manufacture", "To write a software algorithm for it"], 
            ans: "To understand its environmental and societal impacts from creation to disposal", 
            exp: "Engineers describe the life cycle of a product or service [cite: 273] because different engineering solutions can have significantly different impacts on individuals, society, and the natural world. [cite: 272]", 
            src: "PLTW Framework (ERM-B)" 
        },
        { 
            q: "An engineer uses a database like the Cobb Digital Library instead of a generic web search because:", 
            opts: ["It guarantees the data is uncopyrighted", "It automatically generates a prototype", "It contains credible, peer-reviewed sources", "It writes the design brief for them"], 
            ans: "It contains credible, peer-reviewed sources", 
            exp: "Engineers must find relevant data in credible sources such as literature, databases, and policy documents to support decisions. [cite: 212]", 
            src: "PLTW Framework (CCP-D)" 
        },
        { 
            q: "When communicating technical information, engineers use which of the following to clearly support their claims?", 
            opts: ["Anecdotal stories", "Unverified blogs", "Sketches, tables, charts, and graphs", "Personal opinions"], 
            ans: "Sketches, tables, charts, and graphs", 
            exp: "Engineers use sketches, tables, charts, and graphs when appropriate to clearly communicate information and in making arguments and claims. [cite: 299]", 
            src: "PLTW Framework (CCP-D)" 
        },
        { 
            q: "What is a required step before drawing a valid engineering conclusion?", 
            opts: ["Publishing the data immediately", "Ignoring opposing views", "Acknowledging limitations and biases in the evidence", "Deleting outlier data"], 
            ans: "Acknowledging limitations and biases in the evidence", 
            exp: "Engineers draw valid conclusions based on supporting evidence while acknowledging the limitations, opposing views, and biases. [cite: 215]", 
            src: "PLTW Framework (CCP-D)" 
        },
        { 
            q: "Which skill is considered a nontechnical skill required for professional engineering practice?", 
            opts: ["Calculus", "Computer programming", "Collaboration and problem-solving", "Thermodynamics"], 
            ans: "Collaboration and problem-solving", 
            exp: "Nontechnical skills common to all engineering disciplines include problem-solving, handling uncertainty, and systems thinking. [cite: 252]", 
            src: "PLTW Framework (CAR-A)" 
        },
        { 
            q: "If an engineer is designing an HVAC (heating and cooling) system for a building, which discipline are they primarily practicing?", 
            opts: ["Chemical Engineering", "Mechanical Engineering", "Civil Engineering", "Computer Engineering"], 
            ans: "Mechanical Engineering", 
            exp: "Mechanical engineering involves technical roles that deal with mechanical systems, thermal systems, and motion. [cite: 254]", 
            src: "PLTW Framework (CAR-B)" 
        },
        { 
            q: "In an engineering team, what is the purpose of a peer review process?", 
            opts: ["To assign grades to teammates", "To provide effective, positive feedback to improve the product", "To fire underperforming employees", "To bypass quality assurance testing"], 
            ans: "To provide effective, positive feedback to improve the product", 
            exp: "Engineers analyze and evaluate the work of others to describe the positive outcomes of a peer review process [cite: 291] and provide effective feedback. [cite: 292]", 
            src: "PLTW Framework (Global Concepts)" 
        },

        // PROBLEM SOLVING (~30% of EOC Blueprint)
        { 
            q: "Which step of the design process involves synthesizing an ill-formed problem into a meaningful, well-defined problem?", 
            opts: ["Construct and Test", "Evaluate Solution", "Define the Problem", "Present Solution"], 
            ans: "Define the Problem", 
            exp: "Engineers synthesize an ill-formed problem into a meaningful, well-defined problem using relevant information. [cite: 219]", 
            src: "PLTW Framework (CCP-E)" 
        },
        { 
            q: "Requirements like cost limits, safety codes, and manufacturing capabilities are known as:", 
            opts: ["Variables", "Constraints", "Criteria", "Hypotheses"], 
            ans: "Constraints", 
            exp: "Engineers define measurable criteria and realistic constraints (such as cost, safety, reliability) against which alternatives can be evaluated. [cite: 220]", 
            src: "PLTW Framework (CCP-E)" 
        },
        { 
            q: "What tool is used to mathematically compare competing solution ideas against design constraints and criteria?", 
            opts: ["A decision matrix", "A Gantt chart", "A histogram", "A scatter plot"], 
            ans: "A decision matrix", 
            exp: "Engineers carry out a plan to compare competing solution ideas and justify the selection of a solution path with respect to design requirements. [cite: 223]", 
            src: "PLTW Framework (CCP-E)" 
        },
        { 
            q: "Why is the engineering design process considered 'iterative'?", 
            opts: ["It happens in a strict linear order", "It uses computer algorithms", "It requires returning to previous steps to optimize a solution", "It is only used once per project"], 
            ans: "It requires returning to previous steps to optimize a solution", 
            exp: "Engineers strategically iterate steps of the design process to improve and optimize a solution. [cite: 226]", 
            src: "PLTW Framework (CCP-E)" 
        },
        { 
            q: "In an experimental design protocol, the variable that the engineer intentionally changes or manipulates is the:", 
            opts: ["Dependent variable", "Independent variable", "Control variable", "Constant"], 
            ans: "Independent variable", 
            exp: "Engineers develop a testable hypothesis, experimental controls, and important variables (independent and dependent) to address a problem. [cite: 230]", 
            src: "PLTW Framework (CCP-F)" 
        },
        { 
            q: "During an experiment, if unexpected results occur, what is the best practice?", 
            opts: ["Falsify the data to match the hypothesis", "Identify possible sources of error and repeat the experiment", "Change the units of measurement", "Assume the hypothesis was right anyway"], 
            ans: "Identify possible sources of error and repeat the experiment", 
            exp: "Engineers identify possible sources of errors, if they exist, redesign and repeat the experiment when appropriate. [cite: 235]", 
            src: "PLTW Framework (CCP-F)" 
        },
        { 
            q: "Which project management tool helps allocate tasks among team members and tracks a project's schedule over time?", 
            opts: ["Gantt chart", "Decision matrix", "Dial caliper", "Black box model"], 
            ans: "Gantt chart", 
            exp: "Engineers develop a project schedule, allocate tasks among team members, and track progress for successful completion of the project. [cite: 261]", 
            src: "PLTW Framework (CCP-H)" 
        },
        { 
            q: "Project management scope, time, cost, quality, and resources are collectively referred to as:", 
            opts: ["Project deliverables and constraints", "The design brief", "The scientific method", "Assembly components"], 
            ans: "Project deliverables and constraints", 
            exp: "Engineers must define the project deliverables and constraints, such as scope, time, cost, quality, resources, and risk. [cite: 260]", 
            src: "PLTW Framework (CCP-H)" 
        },
        { 
            q: "Describing an electronic circuit in terms of its power source, conductive path, and output load is an example of:", 
            opts: ["Systems thinking", "Algorithmic generation", "Visual analysis", "Parametric modeling"], 
            ans: "Systems thinking", 
            exp: "Systems thinking involves describing a system in terms of its components and/or subsystems and their interactions (e.g., source, path, load). [cite: 357]", 
            src: "PLTW Framework (CCP-I)" 
        },
        { 
            q: "A model that evaluates a system based purely on what goes into it and what comes out of it, without looking at internal mechanics, is a:", 
            opts: ["White box model", "Black box model", "Parametric model", "Mathematical model"], 
            ans: "Black box model", 
            exp: "Engineers describe a system using a black box model indicating inputs and outputs, and boundaries. [cite: 363]", 
            src: "PLTW Framework (CCP-I)" 
        },
        { 
            q: "When a complex problem is broken down into multiple, manageable subprocesses, this is known as:", 
            opts: ["Problem decomposition", "Iteration", "Generative design", "Abstraction"], 
            ans: "Problem decomposition", 
            exp: "Engineers separate a complex process into multiple subprocesses that can be implemented in an organized way to complete the larger process. [cite: 370]", 
            src: "PLTW Framework (AAP-A)" 
        },
        { 
            q: "A set of ordered instructions involving discrete steps to accomplish a complex task is called an:", 
            opts: ["Algorithm", "Abstract", "Equation", "Isometric sketch"], 
            ans: "Algorithm", 
            exp: "Engineers write a set of ordered instructions (algorithms) involving multiple discrete steps to accomplish a complex task. [cite: 373]", 
            src: "PLTW Framework (AAP-B)" 
        },
        { 
            q: "When engineers predict what effect changing one component will have on the whole assembly, they are applying:", 
            opts: ["Systems thinking", "Visual analysis", "Data plotting", "Historical review"], 
            ans: "Systems thinking", 
            exp: "Engineers predict what the effect of making a change to a component of a system will have on the system as a whole. [cite: 362]", 
            src: "PLTW Framework (CCP-I)" 
        },

        // TOOLS AND TECHNOLOGY (~22.5% of EOC Blueprint)
        { 
            q: "Which phase of reverse engineering focuses on the aesthetic principles and elements of a product?", 
            opts: ["Visual analysis", "Functional analysis", "Structural analysis", "Material analysis"], 
            ans: "Visual analysis", 
            exp: "Visual analysis of a natural or man-made object describes the apparent visual principles and elements of design. [cite: 311]", 
            src: "PLTW Framework (CCP-L)" 
        },
        { 
            q: "Which phase of reverse engineering requires a physical teardown to determine the interaction of component parts?", 
            opts: ["Structural analysis", "Visual analysis", "Functional analysis", "Ergonomic analysis"], 
            ans: "Structural analysis", 
            exp: "Structural analysis determines the materials used and the configuration and interaction of component parts when assembled. [cite: 313]", 
            src: "PLTW Framework (CCP-L)" 
        },
        { 
            q: "Fasteners, press fits, and adhesives are examples of methods used to:", 
            opts: ["Rigidly join parts of an assembly", "Allow degrees of freedom", "Conduct visual analysis", "Measure tolerances"], 
            ans: "Rigidly join parts of an assembly", 
            exp: "Engineers describe methods to rigidly join parts of an assembly, including press fits, adhesives, and mechanical fasteners. [cite: 314]", 
            src: "PLTW Framework (CCP-L)" 
        },
        { 
            q: "What is the primary difference between accuracy and precision in measurement?", 
            opts: ["Accuracy is closeness to the true value; precision is repeatability", "Precision is closeness to the true value; accuracy is repeatability", "Accuracy uses standard units; precision uses metric", "There is no difference"], 
            ans: "Accuracy is closeness to the true value; precision is repeatability", 
            exp: "Engineers must describe the accuracy and precision of a measurement and differentiate between the two. [cite: 329]", 
            src: "PLTW Framework (ETT-A)" 
        },
        { 
            q: "A force that fundamentally opposes the motion of a mechanical system is:", 
            opts: ["Friction", "Torque", "Gravity", "Inertia"], 
            ans: "Friction", 
            exp: "Engineers must explain that friction is a force that opposes motion. [cite: 333]", 
            src: "PLTW Framework (ETT-B)" 
        },
        { 
            q: "When a designer tests a material's hardness, flexure, or conductivity without breaking it, this is called:", 
            opts: ["Non-destructive testing", "Tensile testing", "Destructive testing", "Fatigue testing"], 
            ans: "Non-destructive testing", 
            exp: "Engineers conduct non-destructive tests (e.g. hardness, flexure, conductivity) on different material types to investigate properties. [cite: 340]", 
            src: "PLTW Framework (ETT-C)" 
        },
        { 
            q: "A mechanism that moves back and forth in a straight line is exhibiting what type of motion?", 
            opts: ["Reciprocating motion", "Rotary motion", "Oscillating motion", "Irregular motion"], 
            ans: "Reciprocating motion", 
            exp: "Engineers describe different types of motion, including rotary, oscillating, linear, and reciprocating. [cite: 344]", 
            src: "PLTW Framework (ETT-D)" 
        },
        { 
            q: "Which mechanism uses an egg-shaped or irregular profile to convert rotary motion into linear/periodic motion?", 
            opts: ["Cam and follower", "Spur gear", "Block and tackle", "Bevel gear"], 
            ans: "Cam and follower", 
            exp: "Cams and followers can be used to move objects in periodic or irregular motion. [cite: 345]", 
            src: "PLTW Framework (ETT-D)" 
        },
        { 
            q: "If an engineer wants to transform motion without changing its fundamental type (e.g., slow rotary to fast rotary), they would most likely use:", 
            opts: ["Simple mechanisms like gears or pulleys", "A rack and pinion", "A cam and follower", "A slider crank"], 
            ans: "Simple mechanisms like gears or pulleys", 
            exp: "Mechanisms in a design can transform a motion without changing its type (e.g. slow to fast rotary motion using gears). [cite: 348]", 
            src: "PLTW Framework (ETT-D)" 
        },
        { 
            q: "To automate a human-powered device and control the speed of a mechanical system, an engineer would integrate:", 
            opts: ["An electrical circuit with a motor and variable resistance", "A larger cam", "A stronger structural matrix", "A wooden gear train"], 
            ans: "An electrical circuit with a motor and variable resistance", 
            exp: "Engineers design and build an electrical circuit that includes a motor, a switch, and variable resistance to power and control the speed of a mechanism. [cite: 351]", 
            src: "PLTW Framework (10.5.2)" 
        },
        { 
            q: "Why must an engineer be aware that all physical measurements are an approximation?", 
            opts: ["Because measuring devices have limits of precision", "Because math models are always perfect", "Because the metric system is flawed", "Because data is always discrete"], 
            ans: "Because measuring devices have limits of precision", 
            exp: "Engineers must explain that all measurements are an approximation of the true value of a quantity due to tool limitations. [cite: 328]", 
            src: "PLTW Framework (ETT-A)" 
        },
        { 
            q: "In an electrical circuit, how do resistance, current, and voltage relate?", 
            opts: ["Voltage = Current x Resistance (Ohm's Law)", "Current = Voltage x Resistance", "Resistance = Voltage x Current", "Voltage = Mass x Acceleration"], 
            ans: "Voltage = Current x Resistance (Ohm's Law)", 
            exp: "Engineers must calculate circuit resistance, current, and voltage within a circuit using formulas like Ohm's Law. [cite: 350]", 
            src: "PLTW Framework (10.5.1)" 
        },

        // MODELING SYSTEMS (~25% of EOC Blueprint)
        { 
            q: "Because models are a simplified version of a complex phenomenon, engineers must identify:", 
            opts: ["The limitations of the model", "The aesthetic color of the model", "The exact manufacturing cost", "The patent registration number"], 
            ans: "The limitations of the model", 
            exp: "Models use abstraction to represent a simplified version... engineers must identify limitations of the model and differences between the model and reality. [cite: 388]", 
            src: "PLTW Framework (MOD-A)" 
        },
        { 
            q: "An equation or formula used to describe a process and make predictions is known as a:", 
            opts: ["Mathematical model", "Physical prototype", "Virtual assembly", "Generative design"], 
            ans: "Mathematical model", 
            exp: "Engineers use a mathematical model (algorithm, table of values, equation, graph) to represent data and make predictions. [cite: 396]", 
            src: "PLTW Framework (MOD-B)" 
        },
        { 
            q: "On a scatter plot showing two quantitative variables, drawing a 'line of best fit' helps an engineer:", 
            opts: ["Solve problems and make predictions based on the data trend", "Hide outlier data", "Convert units from metric to imperial", "Create a 3D extrusion"], 
            ans: "Solve problems and make predictions based on the data trend", 
            exp: "Engineers fit a function to the data and use the function to solve problems and/or make predictions in the context of the data. [cite: 399]", 
            src: "PLTW Framework (MOD-B)" 
        },
        { 
            q: "In a mathematical model for a straight line, what does the slope represent?", 
            opts: ["The rate of change", "The starting value", "The y-intercept", "The tolerance"], 
            ans: "The rate of change", 
            exp: "In mathematical models, engineers interpret the rate of change (slope) and the y-intercept (constant term) in the context of the data. [cite: 400]", 
            src: "PLTW Framework (MOD-B)" 
        },
        { 
            q: "Which CAD tool takes a two-dimensional profile and sweeps it in a circle to create a three-dimensional object?", 
            opts: ["Revolve", "Extrude", "Loft", "Fillet"], 
            ans: "Revolve", 
            exp: "Engineers identify three-dimensional objects generated by rotation (revolution) of a two-dimensional object. [cite: 403]", 
            src: "PLTW Framework (MOD-C)" 
        },
        { 
            q: "Which of the following describes an allowable variation in the size of an individual manufactured feature?", 
            opts: ["Tolerance", "Allowance", "Clearance", "Interference"], 
            ans: "Tolerance", 
            exp: "Appropriate engineering tolerances specify the allowable variation, size of individual features, and orientation between features. [cite: 411]", 
            src: "PLTW Framework (MOD-D)" 
        },
        { 
            q: "A tolerance that permits variation in only one direction from a specified dimension is a:", 
            opts: ["Unilateral tolerance", "Bilateral tolerance", "Limit dimension", "Clearance fit"], 
            ans: "Unilateral tolerance", 
            exp: "Engineers identify and differentiate among a limit dimension, unilateral tolerance (one direction), and bilateral tolerance (both directions). [cite: 415]", 
            src: "PLTW Framework (MOD-D)" 
        },
        { 
            q: "The intended gap or difference in size between two mating parts of an assembly is known as:", 
            opts: ["Allowance", "Tolerance", "Draft", "Rib"], 
            ans: "Allowance", 
            exp: "Engineers determine the allowance between two mating parts of an assembly based on dimensions given on a technical drawing. [cite: 415]", 
            src: "PLTW Framework (MOD-D)" 
        },
        { 
            q: "If an engineer needs two parts to slide easily past one another, they should dimension the parts to create a:", 
            opts: ["Clearance fit", "Interference fit", "Force fit", "Press fit"], 
            ans: "Clearance fit", 
            exp: "Engineers specify appropriate dimensions to create a clearance fit (parts slide freely) or interference fit (parts are forced together). [cite: 415]", 
            src: "PLTW Framework (MOD-D)" 
        },
        { 
            q: "Applying rules like horizontal, vertical, parallel, or concentric to 2D CAD sketches is known as using:", 
            opts: ["Geometric constraints", "Dimensional constraints", "Assemblies", "Generative design"], 
            ans: "Geometric constraints", 
            exp: "CAD modeling includes the appropriate application of geometric constraints (horizontal, vertical, parallel, perpendicular, tangent, concentric). [cite: 415]", 
            src: "PLTW Framework (MOD-E)" 
        },
        { 
            q: "When creating an assembly drawing in CAD, what tool is used to identify specific component parts by number?", 
            opts: ["Balloons linked to a parts list", "Hidden lines", "Section lines", "Tolerance notes"], 
            ans: "Balloons linked to a parts list", 
            exp: "Engineers generate an assembly drawing using CAD software to identify component parts using part identification numbers and a parts list. [cite: 415]", 
            src: "PLTW Framework (MOD-F)" 
        },
        { 
            q: "What is the purpose of applying 'joints' or 'mates' to a multi-component CAD model?", 
            opts: ["To constrain models and simulate realistic relative motion", "To change the color of the parts", "To apply a uniform density", "To print a 2D drawing"], 
            ans: "To constrain models and simulate realistic relative motion", 
            exp: "Engineers correctly apply joints to constrain multi-component models and/or simulate realistic relative motion of the component parts. [cite: 415]", 
            src: "PLTW Framework (MOD-E)" 
        },
        { 
            q: "Using CAD to mathematically relate dimensions (e.g., setting hole diameter equal to half the part width) is an example of:", 
            opts: ["Using parametric formulas", "Direct modeling", "Applying a tolerance", "Abstract reasoning"], 
            ans: "Using parametric formulas", 
            exp: "Engineers create relationships among part features and dimensions using parametric formulas. [cite: 415]", 
            src: "PLTW Framework (MOD-E)" 
        },
        { 
            q: "Which design concept focuses on whether a part can actually be built efficiently in the real world?", 
            opts: ["Design for Manufacturability", "Aesthetic Proportion", "Visual Rhythm", "Algorithm Design"], 
            ans: "Design for Manufacturability", 
            exp: "Engineers apply the principles of design for manufacturability and assembly to analyze if a product can be built as designed. [cite: 317]", 
            src: "PLTW Framework (CCP-M)" 
        },
        // --- SPRING FINAL REVIEW (PART 2) ---

        // GLOBAL CONCEPTS & PROFESSIONALISM
        { 
            q: "What is the primary purpose of establishing 'team norms' at the beginning of an engineering project?", 
            opts: ["To assign the final grades", "To establish a communication protocol and rules of engagement", "To calculate the mechanical advantage", "To select the CAD software"], 
            ans: "To establish a communication protocol and rules of engagement", 
            exp: "Engineers develop and follow team norms to dictate individual roles, expectations of performance, and rules of engagement within the team.", 
            src: "PLTW Framework (CCP-G)" 
        },
        { 
            q: "If an engineer is developing an idea and relies on positive interdependence among all teammates to succeed, they are engaging in:", 
            opts: ["Independent thinking", "Generative design", "Effective collaboration", "Iterative prototyping"], 
            ans: "Effective collaboration", 
            exp: "Effective team environments develop ideas and create products through positive interdependence among all teammates.", 
            src: "PLTW Framework (D7)" 
        },
        { 
            q: "Why is it critical for an engineer to document their work in an organized notebook?", 
            opts: ["To make the project look more expensive", "So someone unfamiliar with the work can follow and understand the process", "To avoid using CAD software", "To hide proprietary secrets from the client"], 
            ans: "So someone unfamiliar with the work can follow and understand the process", 
            exp: "According to best practices, engineers effectively document work in an organized notebook so someone unfamiliar with the work can follow the process.", 
            src: "PLTW Framework (D8)" 
        },
        { 
            q: "When an engineer makes a strategic use of textual, graphical, audio, and visual elements in a presentation, their main goal is to:", 
            opts: ["Enhance understanding of findings, reasoning, and evidence", "Distract from a failed prototype", "Avoid writing a design brief", "Replace the need for a physical model"], 
            ans: "Enhance understanding of findings, reasoning, and evidence", 
            exp: "Engineers make strategic use of digital media in presentations to enhance understanding of findings, reasoning, and evidence, and to add interest.", 
            src: "PLTW Framework (D8)" 
        },
        { 
            q: "Applying inferential reasoning in an engineering experiment means:", 
            opts: ["Making a wild guess without data", "Using CAD to draw a part", "Making or supporting claims about a larger population based on sample data", "Reversing the design process"], 
            ans: "Making or supporting claims about a larger population based on sample data", 
            exp: "Engineers apply inferential reasoning to make and/or support claims about populations based on data.", 
            src: "PLTW Framework (03.2)" 
        },
        { 
            q: "If a designer acknowledges and respects the local, national, and international perspectives of others, they are demonstrating:", 
            opts: ["Professionalism and Ethics", "Parametric Modeling", "Structural Analysis", "Dimensional Analysis"], 
            ans: "Professionalism and Ethics", 
            exp: "Successful engineering professionals exhibit personal and professional characteristics by acknowledging and respecting international perspectives and ideas.", 
            src: "PLTW Framework (06.1)" 
        },

        // PROBLEM SOLVING & PROCESSES
        { 
            q: "When an engineer separates a complex process into multiple subprocesses that can be implemented in an organized way, they are using:", 
            opts: ["Systems thinking", "Problem decomposition", "Generative design", "Spatial visualization"], 
            ans: "Problem decomposition", 
            exp: "Problem decomposition skills are used to break down data, problems, and processes into manageable parts.", 
            src: "PLTW Framework (012.1)" 
        },
        { 
            q: "What is the primary benefit of using an existing, correct algorithm as a building block for a new algorithm?", 
            opts: ["It guarantees the product will sell", "It helps ensure the new algorithm is correct", "It increases the friction of the system", "It eliminates the need for a prototype"], 
            ans: "It helps ensure the new algorithm is correct", 
            exp: "Engineers use existing correct algorithms as building blocks for constructing a new algorithm to help ensure the new algorithm is correct.", 
            src: "PLTW Framework (012.2)" 
        },
        { 
            q: "If an engineer wants to manipulate, analyze, and present quantitative data using regression analyses, the best tool to use is:", 
            opts: ["A 3D CAD program", "A spreadsheet application", "A word processor", "A physical notebook"], 
            ans: "A spreadsheet application", 
            exp: "Engineers use the functions and tools within a spreadsheet application to manipulate, analyze, and present data in a useful way.", 
            src: "PLTW Framework (012.4)" 
        },
        { 
            q: "In the context of computational thinking, what does 'abstraction' mean?", 
            opts: ["Adding as many complex details as possible", "Identifying what has been made more general by hiding or removing unnecessary details", "Drawing a part in an isometric view", "Using a dial caliper to measure thickness"], 
            ans: "Identifying what has been made more general by hiding or removing unnecessary details", 
            exp: "Engineers apply abstraction to generalize problems and solutions by identifying what details have been hidden or removed.", 
            src: "PLTW Framework (012.5)" 
        },
        { 
            q: "A designer evaluating the potential social, economic, and environmental impacts of a solution (including unanticipated risks) is practicing:", 
            opts: ["Systems thinking", "CAD extrusion", "Tolerancing", "Algorithm writing"], 
            ans: "Systems thinking", 
            exp: "Systems thinking involves predicting the local and global risks and impacts of an engineering decision/solution.", 
            src: "PLTW Framework (11.1.3)" 
        },
        { 
            q: "Before beginning a new design, an engineer critically reflects on past experiences. This is an example of:", 
            opts: ["Adaptability to change", "Reflecting critically to inform future progress", "Algorithm design", "Reverse engineering"], 
            ans: "Reflecting critically to inform future progress", 
            exp: "Engineers reflect critically on past experiences to inform future progress during the design process.", 
            src: "PLTW Framework (01.2)" 
        },
        { 
            q: "Which project management constraint deals with the specific features and functions that must be delivered by the end of the project?", 
            opts: ["Cost", "Time", "Scope", "Risk"], 
            ans: "Scope", 
            exp: "Project management involves defining project deliverables and constraints such as scope, time, cost, quality, resources, and risk.", 
            src: "PLTW Framework (5.1.1)" 
        },
        { 
            q: "When a team uses cloud-based document sharing and video conferencing to complete a project, they are using:", 
            opts: ["Parametric modeling", "Collaborative tools", "Destructive testing", "Go/No-Go gauges"], 
            ans: "Collaborative tools", 
            exp: "Engineers select and use collaborative tools, such as cloud-based tools and document sharing, to successfully complete a project.", 
            src: "PLTW Framework (5.1.3)" 
        },

        // TOOLS, TECH & MATERIALS
        { 
            q: "Using dimensional analysis and unit conversions allows an engineer to:", 
            opts: ["Change a 2D sketch into a 3D model", "Transform data to consistent units appropriate for a particular model", "Increase the precision of a dial caliper", "Change the material density of a part"], 
            ans: "Transform data to consistent units appropriate for a particular model", 
            exp: "Engineers use dimensional analysis and unit conversions to transform data to consistent units or to units appropriate for a particular purpose.", 
            src: "PLTW Framework (10.1.3)" 
        },
        { 
            q: "An engineer shoots an arrow at a target 10 times. All 10 arrows hit the extreme top left corner in a tight cluster. This result is:", 
            opts: ["Accurate but not precise", "Precise but not accurate", "Both accurate and precise", "Neither accurate nor precise"], 
            ans: "Precise but not accurate", 
            exp: "Precision is repeatability (the tight cluster). Accuracy is closeness to the true value (the bullseye).", 
            src: "PLTW Framework (10.1.2)" 
        },
        { 
            q: "If an engineer wants to design a mechanism that is highly efficient with very little energy lost to heat, they must account for:", 
            opts: ["Frictional forces", "The color of the parts", "The aesthetic proportions", "The spreadsheet algorithm"], 
            ans: "Frictional forces", 
            exp: "Friction is a force that opposes motion. Engineers must identify how frictional force impacts the function and efficiency of a mechanism.", 
            src: "PLTW Framework (010.2)" 
        },
        { 
            q: "Which property is considered a 'mechanical' property of a material?", 
            opts: ["Electrical resistivity", "Yield strength", "Specific heat", "Magnetic attraction"], 
            ans: "Yield strength", 
            exp: "Yield strength, ultimate tensile strength, and hardness are mechanical properties. Resistivity is electrical, specific heat is thermal.", 
            src: "PLTW Framework (10.3.2)" 
        },
        { 
            q: "A mechanism that produces motion swinging back and forth in an arc (like a pendulum) is classified as:", 
            opts: ["Linear motion", "Rotary motion", "Oscillating motion", "Intermittent motion"], 
            ans: "Oscillating motion", 
            exp: "Engineers must describe different types of motion (e.g. rotary, oscillating, linear, reciprocating, intermittent, and irregular).", 
            src: "PLTW Framework (10.4.1)" 
        },
        { 
            q: "Which element in an electrical circuit is specifically designed to safely start or stop the flow of current?", 
            opts: ["A switch", "A motor", "A variable resistor", "A battery"], 
            ans: "A switch", 
            exp: "Engineers design and build electrical circuits that include a motor, a switch, and variable resistance to power mechanisms.", 
            src: "PLTW Framework (10.5.2)" 
        },
        { 
            q: "When performing a reverse engineering teardown, discovering that the outer casing is made of Injection Molded Polycarbonate is part of the:", 
            opts: ["Functional analysis", "Visual analysis", "Structural analysis", "Mathematical analysis"], 
            ans: "Structural analysis", 
            exp: "Structural analysis determines the materials used and the configuration of component parts when assembled.", 
            src: "PLTW Framework (9.1.4)" 
        },
        { 
            q: "A hinge joint on a laptop screen removes specific degrees of freedom to allow movement in only one axis. This is an example of:", 
            opts: ["A rigid adhesive connection", "Interfacing parts in an assembly", "An electrical insulator", "A pneumatic system"], 
            ans: "Interfacing parts in an assembly", 
            exp: "Engineers identify joints that allow movement between interfacing parts and the degrees of freedom they remove (including hinges).", 
            src: "PLTW Framework (9.1.6)" 
        },
        { 
            q: "Which material class is best known for being inorganic, non-metallic, and an excellent electrical insulator?", 
            opts: ["Ferrous metals", "Polymers", "Ceramics", "Alloys"], 
            ans: "Ceramics", 
            exp: "Ceramics are inorganic, non-metallic electrical insulators that are generally stiff and hard but somewhat brittle.", 
            src: "Uses of Common Materials Document" 
        },
        { 
            q: "If an engineer wants to design a frying pan handle that will not burn the user, they should choose a material with a:", 
            opts: ["High thermal conductivity", "Low thermal conductivity", "High electrical conductivity", "Low melting point"], 
            ans: "Low thermal conductivity", 
            exp: "A low value of thermal conductivity is favorable to insulate the passage of heat.", 
            src: "Properties of Engineering Materials Chart" 
        },

        // MODELING SYSTEMS & CAD
        { 
            q: "A CAD designer wants to apply an annotation that defines the allowable variation in the location between two drilled holes. They are applying a:", 
            opts: ["Tolerance", "Datum dimension", "Parametric formula", "Generative design"], 
            ans: "Tolerance", 
            exp: "Appropriate engineering tolerances specify the allowable variation, size, orientation, and location between features of an object.", 
            src: "PLTW Framework (013.4)" 
        },
        { 
            q: "In an orthographic projection, if an object has a slanted or angled face, what type of view is required to show that face in its true size and shape?", 
            opts: ["Section view", "Auxiliary view", "Detail view", "Isometric view"], 
            ans: "Auxiliary view", 
            exp: "An auxiliary view is an orthographic projection used to show the true size and shape of an angled surface.", 
            src: "PLTW Framework (Modeling)" 
        },
        { 
            q: "A cutting plane line and cross-hatching are used together to create a:", 
            opts: ["Full- or half-section view", "Detail view", "Exploded assembly", "Parametric model"], 
            ans: "Full- or half-section view", 
            exp: "Engineers identify errors and omissions in a full- or half-section view, including the location of the cutting plane line.", 
            src: "PLTW Framework (13.3.5)" 
        },
        { 
            q: "If a CAD model is built using dimensions that refer back to a single, mathematical variable (like 'Length = Width / 2'), the model is using:", 
            opts: ["Parametric formulas", "Absolute tolerancing", "Direct modeling", "Limit dimensions"], 
            ans: "Parametric formulas", 
            exp: "Engineers create relationships among part features and dimensions using parametric formulas.", 
            src: "PLTW Framework (13.5.3)" 
        },
        { 
            q: "To correctly identify a part in an assembly drawing, a designer uses:", 
            opts: ["A balloon and a parts list", "A section line", "A bilateral tolerance", "A mathematical equation"], 
            ans: "A balloon and a parts list", 
            exp: "Engineers generate an assembly drawing using CAD software to identify component parts using part identification numbers (balloons) and a parts list.", 
            src: "PLTW Framework (13.6.3)" 
        },
        { 
            q: "Which dimensioning method reduces tolerance accumulation by measuring all features from a single reference edge?", 
            opts: ["Chain dimensioning", "Baseline / Datum dimensioning", "Parametric dimensioning", "Unilateral dimensioning"], 
            ans: "Baseline / Datum dimensioning", 
            exp: "Datum (baseline) dimensioning prevents the stacking of errors by measuring all features from a single origin point.", 
            src: "PLTW Framework (Modeling)" 
        },
        { 
            q: "If a technical drawing contains an error in a line type (e.g., using a solid line instead of a dashed line for a hidden feature), this is an error in:", 
            opts: ["Tolerancing", "Drawing conventions / standards", "Algorithmic thinking", "Material selection"], 
            ans: "Drawing conventions / standards", 
            exp: "Engineers must identify errors in orthographic projections including errors in line locations and line types according to accepted technical drawing techniques.", 
            src: "PLTW Framework (13.3.4)" 
        },
        { 
            q: "When a designer uses computer-aided engineering tools to optimize the physical shape of a part for maximum strength and minimum weight, they are using:", 
            opts: ["Generative design and shape optimization", "A Gantt chart", "Reverse engineering", "A decision matrix"], 
            ans: "Generative design and shape optimization", 
            exp: "Engineers use computer-aided engineering tools (e.g. generative design and shape optimization) to optimize design performance of a mechanical part.", 
            src: "PLTW Framework (9.2.3)" 
        },
        // --- SPRING FINAL REVIEW (PART 3) ---

        // GLOBAL CONCEPTS (~25% of Blueprint)
        { 
            q: "According to the PLTW framework, engineering is best defined as:", 
            opts: ["The creation of solutions to meet the needs of people and society", "The scientific study of natural phenomena", "The use of statistical models to graph data", "The process of taking apart a consumer product"], 
            ans: "The creation of solutions to meet the needs of people and society", 
            exp: "Engineering is the creation of solutions, such as new and improved products, technologies, systems and processes, to meet the needs of people and society. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "When an engineer makes a judgment or decision, they should evaluate the point of view and rhetoric of their sources to identify:", 
            opts: ["Deficiencies, limitations, and biases", "Parametric formulas", "Mechanical advantages", "Generative designs"], 
            ans: "Deficiencies, limitations, and biases", 
            exp: "Engineers must evaluate point of view, reasoning, and use of evidence and rhetoric, in oral or written communication and identify deficiencies, limitations and biases. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Why is it important for an engineer to understand the life cycle of a product?", 
            opts: ["To determine its environmental, social, and economic impacts over time", "To know exactly when it will break down", "To calculate the appropriate manufacturing tolerances", "To set the retail price"], 
            ans: "To determine its environmental, social, and economic impacts over time", 
            exp: "Engineers describe the life cycle of a product or service because different engineering solutions can have significantly different impacts on individuals, society, and the natural world. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "When addressing a complex, real-world problem, engineers must often make 'trade-offs'. This means they must:", 
            opts: ["Balance a range of criteria and constraints, such as cost versus safety", "Trade their design with another engineering firm", "Always choose the cheapest material available", "Ignore the environmental impacts if the product is reliable"], 
            ans: "Balance a range of criteria and constraints, such as cost versus safety", 
            exp: "Engineers evaluate a solution to a complex, real-world problem and identify the need for trade-offs to address a range of criteria and constraints, including cost, safety, reliability, and aesthetics. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Which concept involves taking action for collective well-being and using natural resources effectively and efficiently?", 
            opts: ["Sustainable development", "Reverse engineering", "Parametric modeling", "Algorithm creation"], 
            ans: "Sustainable development", 
            exp: "Engineers take action for collective well-being and sustainable development using an ethical decision-making process. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Which of the following is considered a nontechnical skill required for professional engineering practice?", 
            opts: ["Problem-solving and handling uncertainty", "Calculating circuit resistance", "Building a 3D CAD model", "Using dimensional analysis"], 
            ans: "Problem-solving and handling uncertainty", 
            exp: "Identify technical and nontechnical skills common to all engineering disciplines that are gained from specialized education... including problem-solving, handling uncertainty, systems thinking, and modeling. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "An engineer critically self-evaluates their personal contributions and collaboration effectiveness within a team. This is an example of:", 
            opts: ["Professional practice and communication", "Experimental design", "Systems thinking", "Computational thinking"], 
            ans: "Professional practice and communication", 
            exp: "Engineers critically and realistically self-evaluate personal contributions and collaboration effectiveness within a team. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Which of the following is a key characteristic of 'human-centered design'?", 
            opts: ["Aligning product design with its intended use and user", "Using only sustainable materials", "Automating a mechanical system", "Applying geometric constraints in CAD"], 
            ans: "Aligning product design with its intended use and user", 
            exp: "Explain the benefits of human-centered design and apply principles to align product design with intended use. [cite: 1]", 
            src: "PLTW Framework" 
        },

        // PROBLEM SOLVING (~30% of Blueprint)
        { 
            q: "During the design process, when an engineer synthesizes an ill-formed problem into a meaningful one, they are defining the:", 
            opts: ["Problem", "Prototype", "Tolerance", "Algorithm"], 
            ans: "Problem", 
            exp: "Synthesize an ill-formed problem into a meaningful, well-defined problem using relevant information. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Which of the following must be defined before competing solution ideas can be objectively compared?", 
            opts: ["Criteria and constraints", "The critical path", "The black box model", "The center of mass"], 
            ans: "Criteria and constraints", 
            exp: "Define measurable visual, functional, and structural design requirements (criteria) and realistic constraints against which solution alternatives can be evaluated and optimized. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "When an engineer loops back through steps of the design process to improve and optimize a solution, the process is considered:", 
            opts: ["Iterative", "Linear", "Parametric", "Abstract"], 
            ans: "Iterative", 
            exp: "Strategically iterate steps of the design process to improve and optimize a solution. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "In an experimental design, the variable that the experimenter intentionally manipulates is the:", 
            opts: ["Independent variable", "Dependent variable", "Control variable", "Constant"], 
            ans: "Independent variable", 
            exp: "Develop a testable hypothesis, experimental controls and important variables (independent and dependent) address a problem or answer a question. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "When establishing a project schedule in project management, identifying the longest sequence of dependent tasks is known as finding the:", 
            opts: ["Critical path", "Gantt chart", "Black box", "Iterative cycle"], 
            ans: "Critical path", 
            exp: "Develop a project schedule (with the critical path identified when appropriate), allocate tasks among team members, and track progress. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Describing an electronic circuit's components—such as the source, path, and load—and how they interact is an example of:", 
            opts: ["Systems thinking", "Data abstraction", "Visual analysis", "Parametric modeling"], 
            ans: "Systems thinking", 
            exp: "Describe a system in terms of its components and/or subsystems and their interactions. For example, describe the components of an electronic circuit, including source, path, and load. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "A model that describes a system purely by its inputs, outputs, and boundaries without detailing its internal workings is a:", 
            opts: ["Black box model", "Parametric model", "Mathematical model", "Generative model"], 
            ans: "Black box model", 
            exp: "Describe a system using a black box model indicating inputs and outputs, boundaries. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Applying problem decomposition skills means:", 
            opts: ["Breaking down data, problems, and processes into manageable parts", "Destroying a prototype to test its limits", "Converting units from metric to imperial", "Using CAD to optimize a shape"], 
            ans: "Breaking down data, problems, and processes into manageable parts", 
            exp: "Apply problem decomposition skills to break down data, problems, and processes into manageable parts. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "A set of ordered instructions involving multiple discrete steps used to accomplish a complex task is called an:", 
            opts: ["Algorithm", "Abstract", "Equation", "Isometric sketch"], 
            ans: "Algorithm", 
            exp: "Write a set of ordered instructions (with or without a computer) involving multiple discrete steps to accomplish a complex task or achieve a desired result. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Identifying what has been made more general by hiding or removing specific details to generalize a problem is called:", 
            opts: ["Abstraction", "Iteration", "Tolerancing", "Prototyping"], 
            ans: "Abstraction", 
            exp: "Identify what has been made more general by an abstraction and what details have been hidden or removed. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Populating a spreadsheet with data and organizing it to be useful in accomplishing a specific goal is a fundamental part of:", 
            opts: ["Computational thinking", "Reverse engineering", "Parametric modeling", "Tolerance analysis"], 
            ans: "Computational thinking", 
            exp: "Populate a spreadsheet application with data and organize the data to be useful in accomplishing a specific goal. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Which function in a spreadsheet application helps predict future trends based on existing data?", 
            opts: ["Regression analysis", "Auto-sum", "Font formatting", "Cell merging"], 
            ans: "Regression analysis", 
            exp: "Use the functions and tools within a spreadsheet application to manipulate, analyze, and present data in a useful way, including graphs, regression analyses, and descriptive statistical analyses. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Automating a human-powered device using a mechanical and/or electrical system demonstrates:", 
            opts: ["Formulating solutions that use automation", "Creating a black box model", "Applying non-destructive testing", "Conducting a visual analysis"], 
            ans: "Formulating solutions that use automation", 
            exp: "Formulate solutions that use automation to solve a problem. Automate a human-powered device using a mechanical and/or electrical system. [cite: 1]", 
            src: "PLTW Framework" 
        },

        // TOOLS, TECH & MATERIALS (~22.5% of Blueprint)
        { 
            q: "When determining if a physical product can actually be built as designed using available fabrication processes, an engineer is focusing on:", 
            opts: ["Design for manufacturability", "Aesthetic proportions", "Abstract reasoning", "Statistical spread"], 
            ans: "Design for manufacturability", 
            exp: "Apply the principles of design for manufacturability and assembly of mechanical products. Define basic fabrication processes and analyze if a product can be built as designed. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Which phase of reverse engineering determines the purpose, inputs, outputs, and operation of a product?", 
            opts: ["Functional analysis", "Visual analysis", "Structural analysis", "Material analysis"], 
            ans: "Functional analysis", 
            exp: "Perform a functional analysis of a product or system to determine the purpose, inputs and outputs, and operation of a product or system. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "During reverse engineering, tearing down a product to see how parts are connected with adhesives or fasteners is part of the:", 
            opts: ["Structural analysis", "Visual analysis", "Functional analysis", "Ergonomic analysis"], 
            ans: "Structural analysis", 
            exp: "Perform a structural analysis of a product or system to determine the materials used, the form of component parts, as well as the configuration and interaction of component parts when assembled. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "An engineer needs to transform data to consistent units appropriate for a particular model. They should use:", 
            opts: ["Dimensional analysis and unit conversions", "A decision matrix", "Parametric CAD tools", "A Go/No-Go gauge"], 
            ans: "Dimensional analysis and unit conversions", 
            exp: "Use dimensional analysis and unit conversions to transform data to consistent units or to units appropriate for a particular purpose or model. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Because no measuring device is perfect, engineers must accept that all physical measurements are:", 
            opts: ["An approximation of the true value", "Always 100% accurate", "Not necessary for CAD", "Only valid in the metric system"], 
            ans: "An approximation of the true value", 
            exp: "Explain that all measurements are an approximation of the true value of a quantity. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Which of the following is considered a force that opposes motion in a mechanical system?", 
            opts: ["Friction", "Voltage", "Tolerance", "Inertia"], 
            ans: "Friction", 
            exp: "Explain that friction is a force that opposes motion. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "An engineer needs to test the conductivity and hardness of a material without breaking or ruining the sample. They should conduct:", 
            opts: ["Non-destructive tests", "Tensile testing", "Destructive testing", "Life cycle analysis"], 
            ans: "Non-destructive tests", 
            exp: "Conduct non-destructive tests (e.g. hardness, flexure, conductivity) on different material types to investigate material properties. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Cams and followers are primarily used in mechanical design to:", 
            opts: ["Move objects in periodic or irregular motion", "Conduct electrical current", "Rigidly join two parts together", "Calculate statistical variance"], 
            ans: "Move objects in periodic or irregular motion", 
            exp: "Explain how cams and followers can be used to move objects in periodic or irregular motion. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "If a designer uses a mechanism to turn a slow rotary motion into a fast rotary motion, they are using the mechanism to:", 
            opts: ["Transform a motion without changing its type", "Change rotary motion into linear motion", "Increase the coefficient of friction", "Automate a human-powered device"], 
            ans: "Transform a motion without changing its type", 
            exp: "Use mechanisms in a design to transform a motion without changing its type (e.g. slow to fast rotary motion, magnifying linear movement, or changing axis of motion). [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "To power and control the speed of a mechanical mechanism, an engineer would design an electrical circuit containing a:", 
            opts: ["Motor, switch, and variable resistance", "Cam and follower", "Dial caliper and Go/No-Go gauge", "Gantt chart"], 
            ans: "Motor, switch, and variable resistance", 
            exp: "Design and build an electrical circuit that includes a motor, a switch and variable resistance to power and control the speed of a mechanism. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Calculating the resistance, current, and voltage within a circuit requires an understanding of:", 
            opts: ["Ohm's Law", "The Empirical Rule", "Parametric Modeling", "Dimensional Analysis"], 
            ans: "Ohm's Law", 
            exp: "Calculate circuit resistance, current, and voltage within a circuit. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Which tool uses algorithms to optimize the design performance and physical shape of a mechanical part based on material and weight constraints?", 
            opts: ["Generative design / Shape optimization", "A Gantt chart", "A decision matrix", "A digital multimeter"], 
            ans: "Generative design / Shape optimization", 
            exp: "Use computer-aided engineering tools (e.g. generative design and shape optimization) to optimize design performance of a mechanical part or assembly. [cite: 1]", 
            src: "PLTW Framework" 
        },

        // MODELING SYSTEMS (~25% of Blueprint)
        { 
            q: "Why is there no guarantee that an engineering model accurately represents a real object or phenomenon?", 
            opts: ["Because models use abstraction to represent a simplified version of a complex phenomenon", "Because CAD software always contains bugs", "Because engineers cannot use mathematical algorithms", "Because dimensional analysis is inaccurate"], 
            ans: "Because models use abstraction to represent a simplified version of a complex phenomenon", 
            exp: "Recognize that models use abstraction to represent a simplified version of a complex phenomenon and there is no guarantee that the model accurately represents the real object or phenomenon. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Which of the following is an example of a mathematical model used to describe relationships and make predictions?", 
            opts: ["An equation or algorithm", "A physical 3D printed prototype", "A Gantt chart", "An orthographic sketch"], 
            ans: "An equation or algorithm", 
            exp: "Build and/or use a mathematical model (algorithm, table of values, equation, graph) to represent data, describe relationships, describe processes, and to make predictions. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "When interpreting a mathematical model (like a linear graph), what does the slope generally represent?", 
            opts: ["The rate of change", "The y-intercept", "The standard deviation", "The tolerance"], 
            ans: "The rate of change", 
            exp: "In mathematical models, interpret the rate of change (slope) and the y-intercept (constant term) in the context of the data. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Which dimensioning element specifies the allowable variation in the size of an individual feature?", 
            opts: ["Tolerance", "Datum", "Leader line", "Section line"], 
            ans: "Tolerance", 
            exp: "Apply appropriate engineering tolerances to specify the allowable variation, size of individual features, and orientation and location between features of an object. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "A tolerance stated as '1.50 ± 0.05' is an example of a:", 
            opts: ["Bilateral tolerance", "Unilateral tolerance", "Limit dimension", "Clearance fit"], 
            ans: "Bilateral tolerance", 
            exp: "Identify and differentiate among a limit dimension, unilateral tolerance, and bilateral tolerance. A bilateral tolerance allows variation in both directions. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "The planned difference in size between two mating parts (like a peg and a hole) is called the:", 
            opts: ["Allowance", "Tolerance", "Draft angle", "Parametric constraint"], 
            ans: "Allowance", 
            exp: "Determine the allowance between two mating parts of an assembly based on dimensions given on a technical drawing. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Specifying dimensions so that a metal pin is slightly larger than the hole it goes into creates a(n):", 
            opts: ["Interference fit", "Clearance fit", "Transition fit", "Parametric fit"], 
            ans: "Interference fit", 
            exp: "Identify the need for and specify appropriate dimensions to create a clearance fit or interference fit where appropriate. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "In 3D CAD modeling, creating relationships among part features and dimensions using equations (e.g., d1 = d2 / 2) is called using:", 
            opts: ["Parametric formulas", "Absolute constraints", "Visual analysis", "Interference fitting"], 
            ans: "Parametric formulas", 
            exp: "Create relationships among part features and dimensions using parametric formulas. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "To accurately represent the physical behaviors of a design idea in a CAD sketch, an engineer must apply:", 
            opts: ["Geometric and dimensional constraints", "Balloons and parts lists", "Gantt charts", "Section lines"], 
            ans: "Geometric and dimensional constraints", 
            exp: "Correctly build and constrain a three-dimensional solid computer model... This could include the appropriate application of geometric (horizontal, vertical, parallel, perpendicular, tangent, concentric) and dimensional constraints. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "When putting together a multi-component model in CAD, an engineer uses what to simulate realistic relative motion?", 
            opts: ["Joints / Assembly constraints", "Extrusions", "Parametric formulas", "Tolerances"], 
            ans: "Joints / Assembly constraints", 
            exp: "Correctly apply joints to constrain multi-component models and/or simulate realistic relative motion of the component parts. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "An assembly drawing generated in CAD typically identifies component parts using:", 
            opts: ["Part identification numbers (balloons) and a parts list", "Hidden lines and center marks", "Parametric equations", "Decision matrices"], 
            ans: "Part identification numbers (balloons) and a parts list", 
            exp: "Generate an assembly drawing using CAD software to identify component parts and show details of assembly using part identification numbers, a parts list, and other annotations. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "Identifying errors in a technical drawing, such as incorrect line types or missing dimensions, ensures the drawing follows:", 
            opts: ["Standard engineering practices and conventions", "The scientific method", "The empirical rule", "Systems thinking"], 
            ans: "Standard engineering practices and conventions", 
            exp: "Identify errors and omissions in orthographic projections and multiview drawings... to fully detail an object or part using accepted technical drawing techniques. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "What type of technical drawing view uses a cutting plane line to show the interior details of a part?", 
            opts: ["Section view", "Auxiliary view", "Isometric view", "Exploded view"], 
            ans: "Section view", 
            exp: "Identify errors and omissions in a full- or half-section view (including errors in line locations, line types, location of cutting plane line). [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "A three-dimensional object generated by spinning a two-dimensional profile around an axis was created using which CAD operation?", 
            opts: ["Revolve / Rotation", "Extrusion", "Sweep", "Loft"], 
            ans: "Revolve / Rotation", 
            exp: "Identify three-dimensional objects generated by rotation of a two-dimensional object. [cite: 1]", 
            src: "PLTW Framework" 
        },
        { 
            q: "A diagram representing data for two quantitative variables to describe how they are related is called a:", 
            opts: ["Scatter plot", "Histogram", "Box plot", "Gantt chart"], 
            ans: "Scatter plot", 
            exp: "Represent data for two quantitative variables on a scatter plot, and describe how the variables are related. [cite: 1]", 
            src: "PLTW Framework" 
        }
    ]
};

window.pltwBanks = pltwBanks; // Forces the bank to be globally accessible to the game logic
