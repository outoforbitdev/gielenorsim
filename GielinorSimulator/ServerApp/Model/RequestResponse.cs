using System;
using System.Collections.Generic;

namespace GielinorSimulator.Model
{
    public struct SearchResult
    {
        public string Value;
    }

    public class Response
    {
        public bool Success { get; set; }
        public string ErrorMessage { get; set; }

        public Response()
        {
            Success = false;
        }

        public Response(bool success)
        {
            Success = success;
        }
        public Response(string errorMessage)
        {
            ErrorMessage = errorMessage;
            Success = false;
        }
    }

    public class EntityRequestByName
    {
        public string Name { get; set; }
    }

    public class EntityRequest
    {
        public string Name { get; set; }
        public EntityType EntityType { get; set; }
        public string Key { get; set; }
    }

    public class EntityResponse: Response
    {
        public Entity Entity { get; set; }

        public EntityResponse() : base() { }
        public EntityResponse(bool success) : base(success) { }
        public EntityResponse(string errorMessage) : base(errorMessage) { }
        public EntityResponse(Entity entity) : base(true)
        {
            Entity = entity;
        }
    }

    public class BeingRequest: EntityRequest
    {
        public new EntityType EntityType { get; }
        public BeingRequest()
        {
            EntityType = EntityType.Being;
        }
    }

    public class BeingResponse: Response
    {
        public Being Being;

        public BeingResponse() : base() { }
        public BeingResponse(bool success) : base(success) { }
        public BeingResponse(string errorMessage) : base(errorMessage) { }
        public BeingResponse(Being being) : base(true)
        {
            Being = being;
        }
    }

    public class KingdomRequest: EntityRequest
    {
        public new EntityType EntityType { get; }
        public KingdomRequest()
        {
            EntityType = EntityType.Kingdom;
        }
    }

    public class KingdomResponse: Response
    {
        public Kingdom Kingdom;

        public KingdomResponse() : base() { }
        public KingdomResponse(bool success) : base(success) { }
        public KingdomResponse(string errorMessage) : base(errorMessage) { }
        public KingdomResponse(Kingdom kingdom) : base(true)
        {
            Kingdom = kingdom;
        }
    }

    public class DescriptionRequest: EntityRequest
    {
        public new EntityType EntityType { get; }
        public DescriptionRequest()
        {
            EntityType = EntityType.Description;
        }
    }

    public class DescriptionResponse: Response
    {
        public Description Description;

        public DescriptionResponse() : base() { }
        public DescriptionResponse(bool success) : base(success) { }
        public DescriptionResponse(string errorMessage) : base(errorMessage) { }
        public DescriptionResponse(Description description) : base(true)
        {
            Description = description;
        }
    }

    public class SearchSuggestiongResponse: Response
    {
        public List<SearchResult> SearchResults;

        public SearchSuggestiongResponse() : base() { }
        public SearchSuggestiongResponse(bool success) : base(success) { }
        public SearchSuggestiongResponse(string errorMessage) : base(errorMessage) { }
        public SearchSuggestiongResponse(List<SearchResult> searchResults) : base(true)
        {
            SearchResults = searchResults;
        }
    }
}
