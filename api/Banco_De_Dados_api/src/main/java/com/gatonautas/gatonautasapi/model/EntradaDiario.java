package com.gatonautas.gatonautasapi.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "entradas_diario")
public class EntradaDiario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String data;
    private String categoria;
    private String autor;

    @Column(columnDefinition = "TEXT")
    private String texto;

    private String imagem;
    private String status;

    private LocalDateTime dataCriacao;

    public EntradaDiario() {}

    public EntradaDiario(String titulo, String data, String categoria, String autor,
                         String texto, String imagem, String status) {
        this.titulo = titulo;
        this.data = data;
        this.categoria = categoria;
        this.autor = autor;
        this.texto = texto;
        this.imagem = imagem;
        this.status = status;
        this.dataCriacao = LocalDateTime.now().withHour(0).withMinute(0).withSecond(0).withNano(0);
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getData() { return data; }
    public void setData(String data) { this.data = data; }

    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }

    public String getAutor() { return autor; }
    public void setAutor(String autor) { this.autor = autor; }

    public String getTexto() { return texto; }
    public void setTexto(String texto) { this.texto = texto; }

    public String getImagem() { return imagem; }
    public void setImagem(String imagem) { this.imagem = imagem; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getDataCriacao() { return dataCriacao; }
    public void setDataCriacao(LocalDateTime dataCriacao) { this.dataCriacao = dataCriacao; }
}
