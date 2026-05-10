package com.gatonautas.gatonautasapi.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "voluntarios")
public class Voluntario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String planeta;
    private String funcao;

    @Column(columnDefinition = "TEXT")
    private String motivacao;

    private Integer pontuacao;
    private String resultado;

    private LocalDateTime dataCandidatura;

    public Voluntario() {}

    public Voluntario(String nome, String email, String planeta, String funcao,
                      String motivacao, Integer pontuacao, String resultado) {
        this.nome = nome;
        this.email = email;
        this.planeta = planeta;
        this.funcao = funcao;
        this.motivacao = motivacao;
        this.pontuacao = pontuacao;
        this.resultado = resultado;
        this.dataCandidatura = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPlaneta() { return planeta; }
    public void setPlaneta(String planeta) { this.planeta = planeta; }

    public String getFuncao() { return funcao; }
    public void setFuncao(String funcao) { this.funcao = funcao; }

    public String getMotivacao() { return motivacao; }
    public void setMotivacao(String motivacao) { this.motivacao = motivacao; }

    public Integer getPontuacao() { return pontuacao; }
    public void setPontuacao(Integer pontuacao) { this.pontuacao = pontuacao; }

    public String getResultado() { return resultado; }
    public void setResultado(String resultado) { this.resultado = resultado; }

    public LocalDateTime getDataCandidatura() { return dataCandidatura; }
    public void setDataCandidatura(LocalDateTime dataCandidatura) { this.dataCandidatura = dataCandidatura; }
}
