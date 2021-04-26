package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="appointments")
public class Appointment {
    private  Integer physicianid;
    private  Integer patientid;
    private Date dateofappointment;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;




    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Integer getPhysicianid() { return physicianid; }
    public void setPhysicianid(Integer physicianid) { this.physicianid= physicianid; }

    public Integer getPatientid() { return patientid; }
    public void setPatientid(Integer patientid) { this.patientid = patientid; }

    public Date getDateOfAppointment() { return dateofappointment; }
    public void setDateOfAppointment(Date dateofappointment) { this.dateofappointment = dateofappointment; }




    /* @OneToMany(mappedBy = "appointment")
     @JsonIgnore
     private List<Section> sections;

     public List<Section> getSections() {
         return sections;
     }

     public void setSections(List<Section> sections) {
         this.sections = sections;
     }

     public Integer getId() {
         return id;
     }

     public void setId(Integer id) {
         this.id = id;
     }

     public String getTitle() {
         return title;
     }

     public void setTitle(String title) {
         this.title = title;
     }
 */
    public Appointment(Integer patientid, Integer physicianid, Date dateofappointment) {
        this.patientid = patientid;
        this.physicianid = physicianid;
        this.dateofappointment = dateofappointment;
    }

    public Appointment() {

    }
}


