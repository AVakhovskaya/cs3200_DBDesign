# cs3200_DBDesign

Hospital Databse

Group 15

Allyson Vakhovskaya(Sec 03), Nathan Newbury(Sec 03)

A hospital is having issues tracking the prescriptions that the physicians are writing out and who they are assigned to. The patients are complaining that they never get their prescriptions and refills on time, or they are prescribed too much medication. Our database and user interface allows a user to access a list of all the users (patients and physicians) as well as the appointment and prescriptions associated with either user. A patient can view their previous appointments, which physician they met with, and the medications that were prescribed. This way they can keep track of when their medication refill dates are as well as when their last appointment was.

[ db_design_final_project_UML.pdf](https://github.com/AVakhovskaya/cs3200_DBDesign/files/6381524/db_design_final_project_UML.pdf)

Description of user data model
Description of the two domain object data models
Description of the user to domain object relationship
Description of the domain object to domain object relationship

Our portable enumeration is set to show the different kinds of Medicines available for any given perscription. We have a total of 6 different medicines in the enum.

Our User Interface has a list of Users, Appointments and Prescriptions and a button to **CREATE** more of each of these objects. Each list contains a link to the single item in the list which then brings you to a sreen where you can **READ**, **UPDATE**, or **DELETE** the items. Additionally, we created a button on the Appointment screen to list the Prescriptions (1 to many relationship) associated with the appointment. *As a note, when creating or updating any records, only the values 2-4 are valid for patient_id and only values 7-9 are valid for physcian_id.*
