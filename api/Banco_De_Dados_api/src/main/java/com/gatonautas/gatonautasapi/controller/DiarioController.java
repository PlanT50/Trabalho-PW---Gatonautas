package com.gatonautas.gatonautasapi.controller;

import com.gatonautas.gatonautasapi.model.EntradaDiario;
import com.gatonautas.gatonautasapi.repository.EntradaDiarioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/diario")
public class DiarioController {

    private final EntradaDiarioRepository repository;

    public DiarioController(EntradaDiarioRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<EntradaDiario> listarTodas() {
        return repository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody Map<String, String> body) {
        String titulo    = body.get("titulo");
        String data      = body.get("data");
        String categoria = body.get("categoria");
        String autor     = body.get("autor");
        String texto     = body.get("texto");
        String imagem    = body.get("imagem");
        String status    = body.get("status");

        if (titulo == null || data == null || categoria == null || texto == null) {
            return ResponseEntity.badRequest().body(Map.of("erro", "Título, data, categoria e relato são obrigatórios"));
        }

        EntradaDiario entrada = new EntradaDiario(titulo, data, categoria,
                autor != null ? autor : "Tripulante Anônimo",
                texto, imagem, status != null ? status : "publicado");

        return ResponseEntity.ok(repository.save(entrada));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.ok(Map.of("mensagem", "Entrada removida"));
    }
}
