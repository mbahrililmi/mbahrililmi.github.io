from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, Image, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'output/pdf/portfolio-m-bahril-ilmi.pdf'
PHOTO = ROOT / 'img/M.BAHRIL ILMI_18.63.0762.jpg'
NAVY = colors.HexColor('#18263b'); INK = colors.HexColor('#26364b'); MUTED = colors.HexColor('#66758a')
GOLD = colors.HexColor('#b8893b'); PALE = colors.HexColor('#f7f4ee'); LINE = colors.HexColor('#e6e0d5')
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Name', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=30, leading=34, textColor=NAVY))
styles.add(ParagraphStyle(name='Role', parent=styles['Normal'], fontSize=13, leading=18, textColor=GOLD, spaceAfter=12))
styles.add(ParagraphStyle(name='Lead', parent=styles['Normal'], fontSize=10.5, leading=16, textColor=INK))
styles.add(ParagraphStyle(name='H1x', parent=styles['Heading1'], fontName='Helvetica-Bold', fontSize=21, leading=25, textColor=NAVY, spaceAfter=5))
styles.add(ParagraphStyle(name='H2x', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=12.5, leading=16, textColor=NAVY, spaceAfter=3))
styles.add(ParagraphStyle(name='Kicker', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=8, leading=11, textColor=GOLD, spaceAfter=4))
styles.add(ParagraphStyle(name='Bodyx', parent=styles['Normal'], fontSize=9.2, leading=14, textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name='Meta', parent=styles['Normal'], fontSize=8.5, leading=12, textColor=MUTED))
styles.add(ParagraphStyle(name='Tag', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=7.5, leading=10, textColor=GOLD, alignment=1))
styles.add(ParagraphStyle(name='Quote', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=11, leading=17, textColor=NAVY))

def P(text, style='Bodyx'): return Paragraph(text, styles[style])

def tags(items):
    t = Table([[P(x.upper(), 'Tag') for x in items]], colWidths=[170*mm/len(items)])
    t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),PALE),('BOX',(0,0),(-1,-1),.4,LINE),('INNERGRID',(0,0),(-1,-1),.4,LINE),('TOPPADDING',(0,0),(-1,-1),5),('BOTTOMPADDING',(0,0),(-1,-1),5)]))
    return t

def card(title, company, period, desc, tech):
    body = [P(title,'H2x'), P(company,'Meta'), P(period,'Meta'), Spacer(1,3), P(desc), tags(tech)]
    t = Table([[body]], colWidths=[174*mm])
    t.setStyle(TableStyle([('BOX',(0,0),(-1,-1),.6,LINE),('LEFTPADDING',(0,0),(-1,-1),10),('RIGHTPADDING',(0,0),(-1,-1),10),('TOPPADDING',(0,0),(-1,-1),9),('BOTTOMPADDING',(0,0),(-1,-1),9)]))
    return t

def header_footer(canvas, doc):
    canvas.saveState(); w,h=A4; canvas.setFillColor(NAVY); canvas.rect(0,h-7*mm,w,7*mm,fill=1,stroke=0)
    canvas.setFillColor(GOLD); canvas.rect(18*mm,h-7*mm,24*mm,1.2*mm,fill=1,stroke=0)
    canvas.setFont('Helvetica-Bold',8); canvas.setFillColor(MUTED); canvas.drawString(18*mm,10*mm,'M. BAHRIL ILMI  /  PORTFOLIO'); canvas.drawRightString(w-18*mm,10*mm,f'{doc.page:02d}'); canvas.restoreState()

doc = BaseDocTemplate(str(OUT), pagesize=A4, leftMargin=18*mm, rightMargin=18*mm, topMargin=18*mm, bottomMargin=17*mm)
doc.addPageTemplates([PageTemplate(id='main', frames=[Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id='normal')], onPage=header_footer)])
story=[]

# Cover and profile
story += [Spacer(1,16*mm)]
left=[P('SOFTWARE DEVELOPER  /  DATA SCIENTIST  /  LECTURER','Kicker'),P('M. Bahril Ilmi','Name'),P('Full-Stack Development, Digital Transformation & Education','Role'),P('Crafting elegant digital experiences and meaningful technology that empowers people. Currently shaping the future at Digitaliz, The New You Institute, and Ruangguru - while teaching the next generation at Politeknik Hasnur.','Lead'),Spacer(1,10),P('Banjarmasin, Kalimantan Selatan, Indonesia','Meta'),P('mbahrililmi.github.io','Meta')]
photo=Image(str(PHOTO),width=45*mm,height=67.5*mm); photo.hAlign='CENTER'
cover=Table([[left,photo]],colWidths=[115*mm,55*mm]); cover.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0)])); story.append(cover)
story += [Spacer(1,15*mm),P('PROFILE','Kicker'),P("A practical technologist with an educator's mindset",'H1x')]
profile=Table([[P('PROFESSIONAL OVERVIEW','Kicker'),P('EDUCATION','Kicker')],[P("I'm M. Bahril Ilmi, a dedicated Software Developer working across full-stack development, digital transformation, and data science. I combine industry experience with teaching to build useful products and share practical knowledge."),P('M.Kom - Magister Informatika<br/><font color="#66758a">Digital Transformation Intelligence<br/>Universitas AMIKOM Yogyakarta<br/>Mar 2024 - Oct 2025</font><br/><br/>S.Kom - Teknik Informatika<br/><font color="#66758a">Universitas Islam Kalimantan Moch. Arsyad Al Banjari<br/>Mar 2018 - Oct 2022</font>')]],colWidths=[88*mm,82*mm])
profile.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),PALE),('BOX',(0,0),(-1,-1),.6,LINE),('INNERGRID',(0,0),(-1,-1),.6,LINE),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),('TOPPADDING',(0,0),(-1,-1),8),('BOTTOMPADDING',(0,0),(-1,-1),8)])); story += [profile,Spacer(1,12),tags(['Full-Stack Development','Data Science','Digital Transformation','Teaching'])]

# Experience
story += [PageBreak(),P('EXPERIENCE','Kicker'),P('Professional experience','H1x'),P('A journey across software engineering, digital products, and applied education.','Meta'),Spacer(1,9)]
experiences=[('Software Developer','The New You Institute (tnyi.co.id)','May 2026 - Present  |  Full-time  |  Indonesia','Developing innovative digital learning and human transformation platforms. Driving full-stack engineering initiatives that empower personal growth, leadership development, and organizational excellence through technology.',['Full-Stack Development','Digital Transformation','React','Node.js']),('Dosen Industri','Politeknik Negeri Tanah Laut (Politala)','Apr 2026 - Present  |  Pelaihari, Kalimantan Selatan','Serving as Industrial Lecturer, bridging academic excellence with real-world industry practice. Sharing hands-on expertise in software engineering, digital transformation, and modern development workflows.',['Industrial Teaching','Software Engineering','Industry Mentoring']),('Lecturer - Multimedia Engineering Technology','Politeknik Hasnur','Sep 2025 - Present  |  Freelancer  |  Banjarmasin','Teaching practical and theoretical knowledge across multimedia design, interactive media, web development, and modern software engineering practices.',['Multimedia Engineering','Interactive Media','Teaching']),('Coding Instructor','Ruangguru','May 2025 - Present  |  Full-time  |  Jakarta','Teaching coding and programming fundamentals through hands-on learning journeys in web development, problem-solving, and modern software engineering.',['Coding Education','Curriculum Design','JavaScript']),('Data Science Intern','ID/X Partners via Rakamin Academy','Dec 2023 - Jan 2024  |  Internship  |  Remote','Completed a project-based internship focused on data science methodologies, machine learning algorithms, and data analysis techniques.',['Data Science','Python','Machine Learning']),('Software Developer','Yayasan Hasnur Centre (YHC) - Unit Digitaliz','Feb 2022 - Present  |  Full-time  |  Banjarmasin','Leading full-stack development projects and implementing digital transformation solutions, specializing in web development, system integration, and user experience design.',['Full-Stack Development','PHP','MySQL','React'])]
for item in experiences: story += [KeepTogether([card(*item),Spacer(1,7)])]

# Projects
story += [Spacer(1,14),P('SELECTED WORK','Kicker'),P('Featured projects','H1x'),P('Digital products built for organizations, communities, and learning.','Meta'),Spacer(1,9)]
projects=[('TNYI Assessment Culture','Yayasan Hasnur Centre (YHC)','May 2024 - Present','Advanced platform for culture transformation and organizational development assessment.',['Web Development','Culture Assessment','Full-Stack']),('TNYI Activation Culture','Yayasan Hasnur Centre (YHC)','Jan 2024 - Present','Culture activation platform designed to drive organizational culture transformation and employee engagement.',['Culture Activation','Web Development','Employee Engagement']),('Reinventing Organization Hasnur Group','Yayasan Hasnur Centre (YHC)','Dec 2023 - Present','Innovation and collaboration platform featuring Idea Basket and Project Management, connecting stakeholders to solve problems together.',['Innovation Platform','Project Management','Collaboration Tools']),('Pagatan Connect','Community Platform','Jan 2024','A portal connecting people with destinations, local transportation, traditional markets, and daily life in Pagatan.',['Community Platform','Local Tourism','Web Development']),('Hulu Talent','Yayasan Hasnur Centre (YHC)','Oct 2022 - Jun 2023','Human-centered talent management system for digital talent measurement and management.',['Web Development','Full-Stack Development','UX']),('Futuca','Yayasan Hasnur Centre (YHC)','Jun 2023 - Oct 2023','Self-competence camera and learning reflection tool for career and work preparation.',['Web Development','Self-Assessment','Career Tools']),('SIPHA - Academic Information System','Yayasan Hasnur Centre (YHC)','Apr 2023 - Jun 2023','Comprehensive academic management and student services platform for Politeknik Hasnur.',['Web Development','Academic System','Full-Stack']),('E-Recruitment Platform','Yayasan Hasnur Centre (YHC)','Sep 2022 - Feb 2023','Recruitment and career development management platform for talent acquisition.',['Web Development','Full-Stack Development','UX'])]
for item in projects: story += [KeepTogether([card(*item),Spacer(1,7)])]

# Skills and contact
story += [PageBreak(),P('CAPABILITIES','Kicker'),P('Skills and certifications','H1x'),P('A practical toolkit built through industry work, teaching, and continuous learning.','Meta'),Spacer(1,9)]
skills=Table([[P('PROGRAMMING LANGUAGES','Kicker'),P('WEB TECHNOLOGIES','Kicker'),P('DATA & CLOUD','Kicker')],[P('JavaScript<br/>PHP<br/>Python<br/>Java<br/>C++'),P('React.js<br/>HTML/CSS<br/>Bootstrap<br/>CodeIgniter<br/>Flutter'),P('MySQL<br/>Data Analysis<br/>AWS Cloud<br/>Alibaba Cloud<br/>Docker')]],colWidths=[57*mm]*3)
skills.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),PALE),('BOX',(0,0),(-1,-1),.6,LINE),('INNERGRID',(0,0),(-1,-1),.6,LINE),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),('TOPPADDING',(0,0),(-1,-1),8),('BOTTOMPADDING',(0,0),(-1,-1),8)])); story.append(skills)
story += [Spacer(1,14),P('CERTIFICATIONS & ACHIEVEMENTS','Kicker')]
certs=[('AWS Educate Introduction to Generative AI','Amazon Web Services (AWS)  |  Jul 2025'),('Data Science - Fresh Graduate Academy','Digital Talent Scholarship  |  Jul 2025'),('Bisnis Digital / Data Analisis / Etika dan Budaya Digital / Kewirausahaan Digital','Digital Talent Scholarship  |  2025'),('LPIA-EPT - English Proficiency Test','LEMBAGA PENDIDIKAN INDONESIA AMERIKA  |  Aug 2024  |  Score: 497'),('Docker: Pemula sampai Mahir; Database MySQL: Pemula sampai Mahir','Udemy  |  2024'),('Artificial Intelligence - Fresh Graduate Academy','Digital Talent Scholarship  |  Mar 2024'),('Programming and Software Developer','BNSP  |  Oct 2023 - Oct 2026'),('Alibaba Cloud Certified Associate Big Data','Alibaba Cloud  |  Nov 2023 - Nov 2025'),('Junior Web Developer (VSGA)','Digital Talent Scholarship  |  Sep 2023'),('IT Support Google Specialization','Coursera  |  Jul 2023')]
cert_table=Table([[P(a),P(b,'Meta')] for a,b in certs],colWidths=[100*mm,70*mm]); cert_table.setStyle(TableStyle([('ROWBACKGROUNDS',(0,0),(-1,-1),[colors.white,PALE]),('LINEBELOW',(0,0),(-1,-1),.4,LINE),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7),('TOPPADDING',(0,0),(-1,-1),6),('BOTTOMPADDING',(0,0),(-1,-1),6)])); story.append(cert_table)
story += [PageBreak(),P('CONTACT','Kicker'),P("Let's build something meaningful",'H1x'),P('Open to conversations about software development, digital transformation, education, and collaboration.','Meta'),Spacer(1,12)]
contact=Table([[P('LOCATION','Kicker'),P('EMAIL','Kicker'),P('WEB','Kicker')],[P('Banjarmasin, Kalimantan Selatan<br/>Indonesia'),P('mbahrililmi@example.com<br/>WhatsApp: 0813-5037-5976'),P('mbahrililmi.github.io<br/>github.com/mbahrililmi<br/>linkedin.com/in/m-bahril-ilmi-3058a019a')]],colWidths=[57*mm]*3); contact.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),PALE),('BOX',(0,0),(-1,-1),.6,LINE),('INNERGRID',(0,0),(-1,-1),.6,LINE),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),('TOPPADDING',(0,0),(-1,-1),8),('BOTTOMPADDING',(0,0),(-1,-1),8)])); story.append(contact)
story += [Spacer(1,25*mm),P('"Technology is most meaningful when it makes people more capable."','Quote'),Spacer(1,5*mm),P('M. Bahril Ilmi','H2x'),P('Software Developer, Data Scientist & Lecturer','Meta')]
doc.build(story)
print(OUT)
