package com.gatonautas.gatonautasapi.controller;

import com.gatonautas.gatonautasapi.model.Mensagens;
import com.gatonautas.gatonautasapi.model.Mensagens;
import com.gatonautas.gatonautasapi.repository.MensagemRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/mensagens")
public class MensagemController {

    private final MensagemRepository repository;

    public MensagemController(MensagemRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Mensagens> listarTodas() {
        return repository.findAll();
    }

    @PostMapping
    public Mensagens enviarMensagem(@RequestBody Map<String, String> body) {
        String nome = body.get("nome");
        String planeta = body.get("planeta");
        String tipo = body.get("tipo");
        String mensagem = body.get("mensagem");

        Mensagens nova = new Mensagens(nome, planeta, tipo, mensagem);
        return repository.save(nova);
    }

    @DeleteMapping
    public void limparTodas() {
        repository.deleteAll();
    }
}