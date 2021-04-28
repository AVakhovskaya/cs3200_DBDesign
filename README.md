# cs3200_DBDesign
Deliverables: 

1. Name of the project: Hospital Databse

2. Name of the team: Group 15

3. Team members and the section they belong to: Allyson Vakhovskaya(Sec 03), Nathan Newbury(Sec 03)

4. Brief description of the project:
A hospital is having issues tracking the prescriptions that the physicians are writing out and who they are assigned to. The patients are complaining that they never get their prescriptions and refills on time, or they are prescribed too much medication. Our database and user interface allows a user to access a list of all the users (patients and physicians) as well as the appointment and prescriptions associated with either user. A patient can view their previous appointments, which physician they met with, and the medications that were prescribed. This way they can keep track of when their medication refill dates are as well as when their last appointment was.

5. Link to the latest data model as a single UML class diagram:
[ db_design_final_project_UML.pdf](https://github.com/AVakhovskaya/cs3200_DBDesign/files/6381524/db_design_final_project_UML.pdf)

6. Description of user data model
7. Description of the two domain object data models
8. Description of the user to domain object relationship
9. Description of the domain object to domain object relationship

10. Description of the portable enumeration: Our portable enumeration is set to show the different kinds of Medicines available for any given perscription. We have a total of 6 different medicines in the enum.

11. Description of the user interface requirements:
Our User Interface has a list of Users, Appointments and Prescriptions and a button to **CREATE** more of each of these objects. Each list contains a link to the single item in the list which then brings you to a sreen where you can **READ**, **UPDATE**, or **DELETE** the items. Additionally, we created a button on the Appointment screen to list the Prescriptions (1 to many relationship) associated with the appointment. *As a note, when creating or updating any records, only the values 2-4 are valid for patient_id and only values 7-9 are valid for physcian_id.*
